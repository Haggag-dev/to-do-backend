import express, { Request, Response } from "express";
import dotenv from "dotenv";
import ToDo from "./entities/ToDo";

dotenv.config();

const app = express();
app.use(express.json());

const PORT: number = Number(process.env.port) || 3000;

// to-dos in memory data structure
let toDos_inMemoryDB: ToDo[] = [
  {
    id: 1,
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
app.post("/api/to-dos/create", (req: Request, res: Response) => {
  const toDo: ToDo = req.body;
  toDo.id = Date.now();
  toDo.done = false;

  toDos_inMemoryDB.push(toDo);

  res.status(201).json(toDo);
});

// Read
// 1. Read all
app.get("/api/to-dos", (req: Request, res: Response) => {
  res.status(200).send(toDos_inMemoryDB);
});

// 3. Read all to-dos that have a high priority
app.get("/api/to-dos/high-priority", (req: Request, res: Response) => {
  res
    .status(200)
    .send(toDos_inMemoryDB.filter((toDo) => toDo.priority === "high"));
});

// 2. Read a specific to-do with given an id
app.get("/api/to-dos/:id", (req: Request, res: Response) => {
  res
    .status(200)
    .send(toDos_inMemoryDB.filter((toDo) => toDo.id === Number(req.params.id)));
});

// Update
// Update a to-do to mark it as done
app.patch("/api/to-dos/update/done/:id", (req: Request, res: Response) => {
  let toDoRespone;
  for (let i = 0; i < toDos_inMemoryDB.length; i++) {
    if (toDos_inMemoryDB[i].id === Number(req.params.id)) {
      toDos_inMemoryDB[i].done = true;
      toDoRespone = toDos_inMemoryDB[i];

      break;
    }
  }
  if (toDoRespone) res.status(200).json(toDoRespone);
  else res.status(404).json({ message: "ID is not found in DB" });
});

// Delete
// Delete a specific to-do given by receiving its corresponding id
app.delete("/api/to-dos/delete/done/:id", (req: Request, res: Response) => {
  toDos_inMemoryDB = toDos_inMemoryDB.filter(
    (toDo) => toDo.id !== Number(req.params.id)
  );

  res.sendStatus(204).end();
});

// Listen to the port defined at the top
app.listen(PORT);
