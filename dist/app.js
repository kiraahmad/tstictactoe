"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const helper_1 = require("./helper");
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
    res.send('Hi');
});
app.post('/api/tic', (req, res) => {
    const squares = req.body;
    // Will calculate if there is a winner then send the winner to the front-end
    const winner = (0, helper_1.calculateWinner)(squares);
    winner ? res.json({ winner }) : res.json({ message: ' ' });
});
app.listen(5000, () => console.log('Server Running on Port 5000'));
