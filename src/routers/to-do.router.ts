import { Router } from "express";
import {
  deleteToDo,
  findAll,
  findHighPriority,
  getOne,
  updateToDo,
} from "../controllers/to-do.controller";

const router = Router();

// Read
// 1. Read all
router.get("/", findAll);

// 3. Read all to-dos that have a high priority
router.get("/high-priority", findHighPriority);

// 2. Read a specific to-do with given an id
router.get("/:id", getOne);

// Update
// Update a to-do to mark it as done
router.patch("/update/done/:id", updateToDo);

// Delete
// Delete a specific to-do given by receiving its corresponding id
router.delete("/delete/done/:id", deleteToDo);

export default router;
