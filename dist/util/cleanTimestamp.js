"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanTimestamp = void 0;
const cleanTimestamp = (timestamp) => timestamp.replace("T", " ").replace("Z", "");
exports.cleanTimestamp = cleanTimestamp;
