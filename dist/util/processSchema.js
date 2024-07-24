"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detailedProcessSchema = exports.aggregateSchema = void 0;
const graphql_1 = require("graphql");
const interfaceMap = new Map();
let parent = {
    name: '',
    subgraphs: []
};
const determineDefaultOrValue = (dv) => {
    var _a;
    switch (dv === null || dv === void 0 ? void 0 : dv.kind) {
        case graphql_1.Kind.INT:
        case graphql_1.Kind.FLOAT:
        case graphql_1.Kind.STRING:
        case graphql_1.Kind.ENUM:
            return dv.value;
        case graphql_1.Kind.BOOLEAN:
            return dv.value.toString();
        case graphql_1.Kind.LIST:
            return `${dv.values.map((v) => determineDefaultOrValue(v))}`;
        case graphql_1.Kind.OBJECT:
            return `{${(_a = dv.fields) === null || _a === void 0 ? void 0 : _a.map((f) => `${f.name.value}: ${determineDefaultOrValue(f.value)}`).join(', ')}}`;
        default:
            return '';
    }
};
const determineType = (i) => {
    var _a;
    switch ((_a = i.type) === null || _a === void 0 ? void 0 : _a.kind) {
        case graphql_1.Kind.FIELD_DEFINITION:
        case graphql_1.Kind.INPUT_VALUE_DEFINITION:
        case graphql_1.Kind.NON_NULL_TYPE:
        case graphql_1.Kind.LIST_TYPE:
            return determineType({
                nodes: [...i.nodes, i.type.type],
                type: i.type.type,
                typeName: i.typeName
            });
        case graphql_1.Kind.ENUM_VALUE_DEFINITION:
            return 'ENUM_VALUE';
        case graphql_1.Kind.NAMED_TYPE:
            return determineType({
                nodes: [...i.nodes],
                type: undefined,
                typeName: i.type.name.value
            });
        default: {
            const typeName = i.nodes.reverse().reduce((acc, n) => {
                if (!n) {
                    return acc;
                }
                if (n.kind === graphql_1.Kind.LIST) {
                    // eslint-disable-next-line no-return-assign, no-param-reassign
                    return (acc = `[${acc}]`);
                }
                if (n.kind === graphql_1.Kind.NON_NULL_TYPE) {
                    // eslint-disable-next-line no-return-assign, no-param-reassign
                    return (acc = `${acc}!`);
                }
                return acc;
            }, i.typeName);
            return typeName;
        }
    }
};
const pullSubgraphs = (node) => {
    var _a;
    if (!((_a = node.directives) === null || _a === void 0 ? void 0 : _a.length))
        return [];
    const subgraphs = [];
    node.directives.forEach((d) => {
        var _a;
        switch (d.name.value) {
            case 'join__type':
            case 'join_unionMember':
            case 'join__field':
            case 'join__enumValue':
            case 'join__inputField':
            case 'join__implement':
                (_a = d.arguments) === null || _a === void 0 ? void 0 : _a.forEach((a) => {
                    if (a.name.value === 'key') {
                        subgraphs.push(determineDefaultOrValue(a.value));
                    }
                });
                break;
            default:
                break;
        }
    });
    return subgraphs;
};
const processArgs = (field, results, args) => {
    args.forEach((arg) => {
        const result = {
            object: `${parent.name}.${field.name.value}.${arg.name.value}`,
            returnType: determineType({
                type: arg,
                nodes: [arg],
                typeName: ''
            }),
            args: '',
            defaultValue: determineDefaultOrValue(arg.defaultValue)
        };
        if (field.kind === graphql_1.Kind.DIRECTIVE_DEFINITION) {
            result.object = `${field.name.value}.${arg.name.value}`;
        }
        if (field.kind === graphql_1.Kind.FIELD_DEFINITION) {
            result.subgraphs = [
                ...pullSubgraphs(arg),
                ...pullSubgraphs(field),
                ...parent.subgraphs
            ];
        }
        results.push(result);
    });
};
const processField = (field, results, parentNode) => {
    var _a, _b, _c;
    let fieldSubgraphs = pullSubgraphs(field);
    if (fieldSubgraphs.length === 0) {
        fieldSubgraphs = parent.subgraphs;
    }
    const result = {
        object: `${parentNode.name.value}.${field.name.value}`,
        returnType: determineType({
            type: field,
            nodes: [field],
            typeName: ''
        }),
        description: (_a = field.description) === null || _a === void 0 ? void 0 : _a.value,
        subgraphs: fieldSubgraphs.filter((elem, pos) => fieldSubgraphs.indexOf(elem) === pos)
    };
    if (field.kind === graphql_1.Kind.ENUM_VALUE_DEFINITION) {
        results.push(result);
        return;
    }
    if (field.kind === graphql_1.Kind.FIELD_DEFINITION) {
        result.args = (_b = field.arguments) === null || _b === void 0 ? void 0 : _b.map((a) => {
            let defaultValue = '';
            if (a.defaultValue) {
                defaultValue = determineType({
                    type: a.defaultValue,
                    nodes: [a.defaultValue],
                    typeName: ''
                });
            }
            return `${a.name.value}: ${determineType({
                type: a.type,
                nodes: [a.type],
                typeName: ''
            })} ${defaultValue ? `= ${defaultValue}` : ''}`;
        }).join(', ');
        processArgs(field, results, [...((_c = field.arguments) !== null && _c !== void 0 ? _c : [])]);
    }
    else if (field.kind === graphql_1.Kind.INPUT_VALUE_DEFINITION) {
        result.defaultValue = determineDefaultOrValue(field.defaultValue);
    }
    const example = [];
    if (field.directives) {
        field.directives.forEach((d) => {
            var _a, _b;
            if (d.name.value === 'example') {
                (_a = d.arguments) === null || _a === void 0 ? void 0 : _a.forEach((a) => {
                    if (a.name.value === 'samples') {
                        example.push(determineDefaultOrValue(a.value));
                    }
                });
            }
            else if (d.name.value === 'deprecated') {
                result.deprecated = 'true';
                result.deprecationReason = (_b = d.arguments) === null || _b === void 0 ? void 0 : _b.map((a) => determineDefaultOrValue(a.value)).join(', ');
            }
        });
    }
    results.push(result);
};
const processType = (node, results, kind) => {
    var _a, _b, _c, _d, _e, _f;
    const subgraphs = pullSubgraphs(node);
    parent = {
        name: node.name.value,
        subgraphs
    };
    const result = {
        object: node.name.value,
        returnType: kind,
        args: '',
        description: (_a = node.description) === null || _a === void 0 ? void 0 : _a.value,
        subgraphs
    };
    if (node.kind !== graphql_1.Kind.SCALAR_TYPE_DEFINITION &&
        node.kind !== graphql_1.Kind.UNION_TYPE_DEFINITION &&
        node.kind !== graphql_1.Kind.ENUM_TYPE_DEFINITION) {
        if (node.kind === graphql_1.Kind.OBJECT_TYPE_DEFINITION) {
            result.sourceInterfaces = (_b = node.interfaces) === null || _b === void 0 ? void 0 : _b.map((i) => i.name.value);
        }
        (_c = node.fields) === null || _c === void 0 ? void 0 : _c.forEach((field) => processField(field, results, node));
    }
    else if (node.kind === graphql_1.Kind.ENUM_TYPE_DEFINITION) {
        (_d = node.values) === null || _d === void 0 ? void 0 : _d.forEach((field) => processField(field, results, node));
    }
    if (node.kind === graphql_1.Kind.UNION_TYPE_DEFINITION)
        result.implementations = (_e = node.types) === null || _e === void 0 ? void 0 : _e.map((t) => t.name.value);
    if (node.kind === graphql_1.Kind.INTERFACE_TYPE_DEFINITION ||
        node.kind === graphql_1.Kind.OBJECT_TYPE_DEFINITION) {
        (_f = node.interfaces) === null || _f === void 0 ? void 0 : _f.forEach((i) => {
            const existing = interfaceMap.get(i.name.value) || [];
            interfaceMap.set(i.name.value, [...existing, node.name.value]);
        });
    }
    results.push(result);
};
const processDirective = (node, results) => {
    var _a, _b, _c;
    const result = {
        object: node.name.value,
        returnType: 'Directive',
        args: '',
        description: (_a = node.description) === null || _a === void 0 ? void 0 : _a.value
    };
    result.args = (_b = node.arguments) === null || _b === void 0 ? void 0 : _b.map((a) => {
        let defaultValue = '';
        if (a.defaultValue) {
            defaultValue = determineType({
                type: a.defaultValue,
                nodes: [a.defaultValue],
                typeName: ''
            });
        }
        const defaultArg = defaultValue ? `= ${defaultValue}` : '';
        return `${a.name.value}: ${determineType({
            type: a.type,
            nodes: [a.type],
            typeName: ''
        })} ${defaultArg}`;
    }).join(', ');
    processArgs(node, results, [...((_c = node.arguments) !== null && _c !== void 0 ? _c : [])]);
    results.push(result);
};
const generateResults = (schema) => {
    const results = [];
    (0, graphql_1.visit)(schema, {
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
    });
    for (const [key, value] of interfaceMap) {
        const result = results.find((r) => r.object === key);
        if (result) {
            result.implementations = value;
        }
    }
    return results;
};
const aggregateSchema = (schemaString) => {
    var _a, _b;
    const schema = (0, graphql_1.parse)(schemaString);
    const results = generateResults(schema);
    const aggregatedResult = {
        queries: 0,
        mutations: 0,
        subscriptions: 0,
        entities: 0,
        types: 0,
        interfaces: 0,
        enums: 0,
        scalars: 0,
        fields: 0,
    };
    for (const result of results) {
        switch (result.returnType) {
            case 'Type definition':
                if (result.object === 'Query' || result.object === 'Mutation' || result.object === 'Subscription') {
                    break;
                }
                aggregatedResult.types += 1;
                if (((_b = (_a = result.subgraphs) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : -1) > 0) {
                    aggregatedResult.entities += 1;
                }
                break;
            case 'Interface':
                aggregatedResult.interfaces += 1;
                break;
            case 'Enum':
                aggregatedResult.enums += 1;
                break;
            case 'Scalar':
                aggregatedResult.scalars += 1;
                break;
            case 'Directive':
            case 'Input object':
            case 'Union':
                break;
            default:
                aggregatedResult.fields += 1;
                break;
        }
        if (result.object.startsWith('Query.') && !(result.object.split('.').length > 2)) {
            aggregatedResult.queries += 1;
        }
        else if (result.object.startsWith('Mutation.') && !(result.object.split('.').length > 2)) {
            aggregatedResult.mutations += 1;
        }
        else if (result.object.startsWith('Subscription.') && !(result.object.split('.').length > 2)) {
            aggregatedResult.subscriptions += 1;
        }
    }
    return aggregatedResult;
};
exports.aggregateSchema = aggregateSchema;
const detailedProcessSchema = (schemaString) => {
    const schema = (0, graphql_1.parse)(schemaString);
    return generateResults(schema);
};
exports.detailedProcessSchema = detailedProcessSchema;
