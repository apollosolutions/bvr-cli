"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphRefParser = void 0;
const graphRefParser = (graphRef) => {
    const [graphId, variantId] = graphRef.split('@');
    return { graphId, variantId };
};
exports.graphRefParser = graphRefParser;
