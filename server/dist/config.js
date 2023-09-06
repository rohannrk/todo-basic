"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO_URI = process.env.MONGO_URI;
const SECRET = process.env.SECRET;
const PORT = process.env.PORT;
const config = {
    MONGO_URI,
    SECRET,
    PORT
};
exports.default = config;