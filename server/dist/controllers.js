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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readThemes = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("./config");
const readThemes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, axios_1.default)(config_1.config.url);
        const themes = data.data.results;
        res.status(200).send(themes);
    }
    catch (e) {
        console.log(e.message);
        return;
    }
});
exports.readThemes = readThemes;
