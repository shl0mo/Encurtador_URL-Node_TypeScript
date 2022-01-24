"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const schema_url = new Schema({
    url_original: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    url_encurtada: {
        type: String,
        required: true
    }
});
exports.URLModel = mongoose_1.default.model('URL', schema_url);
