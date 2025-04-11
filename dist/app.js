"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = Number(process.env.port) || 3000;
// to-dos in memory data structure
let toDos_inMemoryDB = [
    {
        id: Date.now() + 0,
        title: "Attend the bachelor's meeting",
        done: false,
        priority: "high",
    },
    {
        id: Date.now() + 1,
        title: "Take a break",
        done: true,
        priority: "normal",
    },
    {
        id: Date.now() + 2,
        title: "Prepare food",
        done: false,
        priority: "low",
    },
    {
        id: Date.now() + 3,
        title: "Play football",
        done: true,
        priority: "high",
    },
];
/* CRUD Ops */
// Create
app.post("/api/to-dos/create", (req, res) => {
    const toDo = req.body;
    toDo.id = Date.now();
    toDo.done = false;
    toDos_inMemoryDB.push(toDo);
    res.status(201).json(toDo);
});
// Listen to the port defined at the top
app.listen(PORT);
