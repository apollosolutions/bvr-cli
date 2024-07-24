"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chooseAccountFromToken = void 0;
const prompts_1 = require("@inquirer/prompts");
const chooseAccountFromToken = (existingAccounts) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if the user wants to use the account within the token itself
    if (existingAccounts.length === 1) {
        const useExisting = yield (0, prompts_1.confirm)({
            message: `Use account ${existingAccounts[0]}?`,
            default: true,
        });
        if (useExisting) {
            return existingAccounts[0];
        }
    }
    else if (existingAccounts.length > 1) {
        const accountId = yield (0, prompts_1.select)({
            message: 'Select an account:',
            choices: existingAccounts.map(id => ({ name: id, value: id }))
        });
        return accountId;
    }
    return '';
});
exports.chooseAccountFromToken = chooseAccountFromToken;
