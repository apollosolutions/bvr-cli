import {
    TypeDefinitionNode,
    parse,
    visit,
    Kind,
    ASTNode,
    FieldDefinitionNode,
    InputValueDefinitionNode,
    EnumValueDefinitionNode,
    DirectiveDefinitionNode,
    DocumentNode
} from 'graphql'

type Result = {
    object: string
    returnType: string
    args?: string
    description?: string
    deprecated?: string
    deprecationReason?: string
    defaultValue?: string
    subgraphs?: string[]
    sourceInterfaces?: string[]
    implementations?: string[]
}

export type AggregatedResult = {
    queries: number,
    mutations: number,
    subscriptions: number,
    entities: number,
    types: number,
    interfaces: number,
    enums: number,
    scalars: number,
    fields: number,
}
type Results = Result[]

type DetermineTypeInput = {
    nodes: ASTNode[]
    typeName: string
    type?: ASTNode
}

type Parent = {
    name: string
    subgraphs: string[]
}

const interfaceMap = new Map<string, string[]>()

let parent: Parent = {
    name: '',
    subgraphs: []
}

const determineDefaultOrValue = (
    dv: InputValueDefinitionNode['defaultValue']
): string => {
    switch (dv?.kind) {
        case Kind.INT:
        case Kind.FLOAT:
        case Kind.STRING:
        case Kind.ENUM:
            return dv.value
        case Kind.BOOLEAN:
            return dv.value.toString()
        case Kind.LIST:
            return `${dv.values.map((v) => determineDefaultOrValue(v))}`
        case Kind.OBJECT:
            return `{${dv.fields?.map((f) => `${f.name.value}: ${determineDefaultOrValue(f.value)}`).join(', ')}}`
        default:
            return ''
    }
}

const determineType = (i: DetermineTypeInput): string => {
    switch (i.type?.kind) {
        case Kind.FIELD_DEFINITION:
        case Kind.INPUT_VALUE_DEFINITION:
        case Kind.NON_NULL_TYPE:
        case Kind.LIST_TYPE:
            return determineType({
                nodes: [...i.nodes, i.type.type],
                type: i.type.type,
                typeName: i.typeName
            })
        case Kind.ENUM_VALUE_DEFINITION:
            return 'ENUM_VALUE'
        case Kind.NAMED_TYPE:
            return determineType({
                nodes: [...i.nodes],
                type: undefined,
                typeName: i.type.name.value
            })
        default: {
            const typeName = i.nodes.reverse().reduce((acc, n) => {
                if (!n) {
                    return acc
                }
                if (n.kind === Kind.LIST) {
                    // eslint-disable-next-line no-return-assign, no-param-reassign
                    return (acc = `[${acc}]`)
                } if (n.kind === Kind.NON_NULL_TYPE) {
                    // eslint-disable-next-line no-return-assign, no-param-reassign
                    return (acc = `${acc}!`)
                }
                return acc

            }, i.typeName)

            return typeName
        }
    }
}

const pullSubgraphs = (
    node:
        | TypeDefinitionNode
        | FieldDefinitionNode
        | InputValueDefinitionNode
        | EnumValueDefinitionNode
) => {
    if (!node.directives?.length) return []
    const subgraphs: string[] = []

    node.directives.forEach((d) => {
        switch (d.name.value) {
            case 'join__type':
            case 'join_unionMember':
            case 'join__field':
            case 'join__enumValue':
            case 'join__inputField':
            case 'join__implement':
                d.arguments?.forEach((a) => {
                    if (a.name.value === 'key') {
                        subgraphs.push(determineDefaultOrValue(a.value))
                    }
                })
                break
            default:
                break
        }
    })

    return subgraphs
}

const processArgs = (
    field: FieldDefinitionNode | DirectiveDefinitionNode,
    results: Results,
    args: Array<InputValueDefinitionNode>
) => {
    args.forEach((arg) => {
        const result: Result = {
            object: `${parent.name}.${field.name.value}.${arg.name.value}`,
            returnType: determineType({
                type: arg,
                nodes: [arg],
                typeName: ''
            }),
            args: '',
            defaultValue: determineDefaultOrValue(arg.defaultValue)
        }
        if (field.kind === Kind.DIRECTIVE_DEFINITION) {
            result.object = `${field.name.value}.${arg.name.value}`
        }
        if (field.kind === Kind.FIELD_DEFINITION) {
            result.subgraphs = [
                ...pullSubgraphs(arg),
                ...pullSubgraphs(field),
                ...parent.subgraphs
            ]
        }
        results.push(result)
    })
}

const processField = (
    field:
        | FieldDefinitionNode
        | EnumValueDefinitionNode
        | InputValueDefinitionNode,
    results: Results,
    parentNode: TypeDefinitionNode
) => {
    let fieldSubgraphs = pullSubgraphs(field)

    if (fieldSubgraphs.length === 0) {
        fieldSubgraphs = parent.subgraphs
    }

    const result: Result = {
        object: `${parentNode.name.value}.${field.name.value}`,
        returnType: determineType({
            type: field,
            nodes: [field],
            typeName: ''
        }),
        description: field.description?.value,
        subgraphs: fieldSubgraphs.filter((elem, pos) => fieldSubgraphs.indexOf(elem) === pos)
    }

    if (field.kind === Kind.ENUM_VALUE_DEFINITION) {
        results.push(result)
        return
    } if (field.kind === Kind.FIELD_DEFINITION) {
        result.args = field.arguments
            ?.map((a) => {
                let defaultValue = ''
                if (a.defaultValue) {
                    defaultValue = determineType({
                        type: a.defaultValue,
                        nodes: [a.defaultValue],
                        typeName: ''
                    })
                }

                return `${a.name.value}: ${determineType({
                    type: a.type,
                    nodes: [a.type],
                    typeName: ''
                })} ${defaultValue ? `= ${defaultValue}` : ''}`
            })
            .join(', ')

        processArgs(field, results, [...(field.arguments ?? [])])
    } else if (field.kind === Kind.INPUT_VALUE_DEFINITION) {
        result.defaultValue = determineDefaultOrValue(field.defaultValue)
    }

    const example: string[] = []
    if (field.directives) {
        field.directives.forEach((d) => {
            if (d.name.value === 'example') {
                d.arguments?.forEach((a) => {
                    if (a.name.value === 'samples') {
                        example.push(determineDefaultOrValue(a.value))
                    }
                })
            } else if (d.name.value === 'deprecated') {
                result.deprecated = 'true'
                result.deprecationReason = d.arguments
                    ?.map((a) => determineDefaultOrValue(a.value))
                    .join(', ')
            }
        })
    }

    results.push(result)
}

const processType = (node: TypeDefinitionNode, results: Results, kind: string) => {
    const subgraphs = pullSubgraphs(node)

    parent = {
        name: node.name.value,
        subgraphs
    }

    const result: Result = {
        object: node.name.value,
        returnType: kind,
        args: '',
        description: node.description?.value,
        subgraphs
    }
    if (
        node.kind !== Kind.SCALAR_TYPE_DEFINITION &&
        node.kind !== Kind.UNION_TYPE_DEFINITION &&
        node.kind !== Kind.ENUM_TYPE_DEFINITION
    ) {
        if (node.kind === Kind.OBJECT_TYPE_DEFINITION) {
            result.sourceInterfaces = node.interfaces?.map((i) => i.name.value)
        }
        node.fields?.forEach((field) => processField(field, results, node))
    } else if (node.kind === Kind.ENUM_TYPE_DEFINITION) {
        node.values?.forEach((field) => processField(field, results, node))
    }

    if (node.kind === Kind.UNION_TYPE_DEFINITION)
        result.implementations = node.types?.map((t) => t.name.value)

    if (
        node.kind === Kind.INTERFACE_TYPE_DEFINITION ||
        node.kind === Kind.OBJECT_TYPE_DEFINITION
    ) {
        node.interfaces?.forEach((i) => {
            const existing = interfaceMap.get(i.name.value) || []
            interfaceMap.set(i.name.value, [...existing, node.name.value])
        })
    }

    results.push(result)
}

const processDirective = (node: DirectiveDefinitionNode, results: Results) => {
    const result: Result = {
        object: node.name.value,
        returnType: 'Directive',
        args: '',
        description: node.description?.value
    }

    result.args = node.arguments
        ?.map((a) => {
            let defaultValue = ''
            if (a.defaultValue) {
                defaultValue = determineType({
                    type: a.defaultValue,
                    nodes: [a.defaultValue],
                    typeName: ''
                })
            }
            const defaultArg = defaultValue ? `= ${defaultValue}` : ''
            return `${a.name.value}: ${determineType({
                type: a.type,
                nodes: [a.type],
                typeName: ''
            })} ${defaultArg}`
        })
        .join(', ')

    processArgs(node, results, [...(node.arguments ?? [])])

    results.push(result)
}

const generateResults = (schema: DocumentNode) => {
    const results: Results = []
    visit(schema, {
        ObjectTypeDefinition: {
            enter: (node) => processType(node, results, 'Type definition')
        },
        UnionTypeDefinition: {
            enter: (node) => processType(node, results, 'Union')
        },
        InterfaceTypeDefinition: {
            enter: (node) => processType(node, results, 'Interface')
        },
        ScalarTypeDefinition: {
            enter: (node) => processType(node, results, 'Scalar')
        },
        InputObjectTypeDefinition: {
            enter: (node) => processType(node, results, 'Input object')
        },
        EnumTypeDefinition: {
            enter: (node) => processType(node, results, 'Enum')
        },
        DirectiveDefinition: {
            enter: (node) => processDirective(node, results)
        }
    })

    for (const [key, value] of interfaceMap) {
        const result = results.find((r) => r.object === key)
        if (result) {
            result.implementations = value
        }
    }
    return results
}

export const aggregateSchema = (schemaString: string) => {
    const schema = parse(schemaString)
    const results = generateResults(schema)
    const aggregatedResult: AggregatedResult = {
        queries: 0,
        mutations: 0,
        subscriptions: 0,
        entities: 0,
        types: 0,
        interfaces: 0,
        enums: 0,
        scalars: 0,
        fields: 0,
    }

    for (const result of results) {
        switch (result.returnType) {
            case 'Type definition':
                if (result.object === 'Query' || result.object === 'Mutation' || result.object === 'Subscription') {
                    break
                }
                aggregatedResult.types += 1
                if ((result.subgraphs?.length ?? -1) > 0) {
                    aggregatedResult.entities += 1
                }
                break
            case 'Interface':
                aggregatedResult.interfaces += 1
                break
            case 'Enum':
                aggregatedResult.enums += 1
                break
            case 'Scalar':
                aggregatedResult.scalars += 1
                break
            case 'Directive':
            case 'Input object':
            case 'Union':
                break
            default:
                aggregatedResult.fields += 1
                break
        }
        if (result.object.startsWith('Query.') && !(result.object.split('.').length > 2)) {
            aggregatedResult.queries += 1
        } else if (result.object.startsWith('Mutation.') && !(result.object.split('.').length > 2)) {
            aggregatedResult.mutations += 1
        } else if (result.object.startsWith('Subscription.') && !(result.object.split('.').length > 2)) {
            aggregatedResult.subscriptions += 1
        }
    }
    return aggregatedResult
}

export const detailedProcessSchema = (schemaString: string) => {
    const schema = parse(schemaString)

    return generateResults(schema)
}

