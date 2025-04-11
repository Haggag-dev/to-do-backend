import express from "express";
import toDoRouter from "./routers/to-do.router";

const app = express();

app.use(express.json());

app.use("/api/to-dos", toDoRouter);

/* CRUD Ops */

// // Create
// app.post("/api/to-dos/create", (req: Request, res: Response) => {
//   const toDo: ToDo = req.body;
//   toDo.id = Date.now();
//   toDo.done = false;

//   toDos_inMemoryDB.push(toDo);

//   res.status(201).json(toDo);
// });

export default app;
