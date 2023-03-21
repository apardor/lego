"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const API_KEY = process.env.API_KEY || '';
const THEME_URL = process.env.THEME_URL || '';
const THEME_URL_API = `${THEME_URL}?key=${API_KEY}`;
exports.config = {
    url: THEME_URL_API
};
