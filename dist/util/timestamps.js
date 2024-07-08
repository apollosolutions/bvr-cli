"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.offsetToTimestamp = exports.cleanTimestamp = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const cleanTimestamp = (timestamp) => timestamp.replace("T", " ").replace("Z", "") + " UTC";
exports.cleanTimestamp = cleanTimestamp;
const offsetToTimestamp = (offset) => (0, dayjs_1.default)()
    .subtract(Math.abs(offset), 'seconds')
    .startOf('day')
    .toISOString();
exports.offsetToTimestamp = offsetToTimestamp;