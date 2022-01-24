"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
var host = 'http://localhost';
var porta = '3001';
app.get('/', function (req, res) {
});
app.listen(porta, function () {
    console.log("Servidor rodando na porta ".concat(host, ":").concat(porta));
});
