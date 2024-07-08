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
const clipanion_1 = require("clipanion");
class ConfigCommand extends clipanion_1.Command {
    constructor() {
        super(...arguments);
        this.config = clipanion_1.Option.String('-c,--config');
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Welcome to the Apollo BVR CLI configuration wizard!');
        });
    }
}
exports.default = ConfigCommand;
ConfigCommand.paths = [['configure']];
ConfigCommand.usage = clipanion_1.Command.Usage({
    category: 'Create',
    description: 'Guides you through creation of JWKS via either explicit configuration or by using a sample JWT',
    examples: [['Basic usage', '$0 configure'], ['Modifying existing configuration file', '$0 configure --config <config_path>']],
});
