export const graphRefParser = (graphRef: string) => {
    const [graphId, variantId] = graphRef.split('@')
    return { graphId, variantId }
}
