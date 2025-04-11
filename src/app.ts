import express from "express";
import toDoRouter from "./routers/to-do.router";

const app = express();

app.use(express.json());

app.use("/api/to-dos", toDoRouter);

export default app;
