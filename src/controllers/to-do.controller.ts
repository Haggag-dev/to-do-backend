import { Request, Response } from "express";
import {
  deleteToDoService,
  findHighPriorityService,
  findAllService,
  updateToDoService,
  findOneService,
  createToDoService,
} from "../services/to-do.service";

export const create = (req: Request, res: Response) => {
  const toDo = createToDoService(req.body);
  res.status(201).json(toDo);
};

export const findAll = (req: Request, res: Response) => {
  const toDos = findAllService();
  res.status(200).send(toDos);
};

export const getOne = (req: Request, res: Response) => {
  const toDo = findOneService(req.params.id);
  if (toDo) res.send(toDo).status(200);
  else res.sendStatus(404);
};

export const findHighPriority = (req: Request, res: Response) => {
  const toDosHighPriority = findHighPriorityService();
  res.status(200).send(toDosHighPriority);
};

export const updateToDo = (req: Request, res: Response) => {
  const toDoRespone = updateToDoService(req.params.id);
  if (toDoRespone) res.status(200).json(toDoRespone);
  else res.status(404).json({ message: "ID is not found in DB" });
};

export const deleteToDo = (req: Request, res: Response) => {
  deleteToDoService(req.params.id);
  res.sendStatus(204).end();
};
