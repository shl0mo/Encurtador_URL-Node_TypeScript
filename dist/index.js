"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const urlController_1 = require("./controllers/urlController");
const mongoConnection_1 = require("./database/mongoConnection");
const constants_1 = require("./config/constants");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const host = constants_1.config.HOST;
const porta = constants_1.config.PORTA;
const banco_dados = new mongoConnection_1.mongoConnection();
banco_dados.conectar();
const url_controller = new urlController_1.urlController();
app.post('/encurtador', url_controller.encurtador);
app.get('/:hash', url_controller.redirecionar);
app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${host}:${porta}`);
});
