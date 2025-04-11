import {
  ToDo,
  deleteToDo,
  getAll,
  getHighPriority,
  getOne,
  updateToDo,
} from "../repositories/to-do.repository";

export const findAllService = (): ToDo[] => getAll();

export const findOneService = (id: string): ToDo | null => {
  const idAsNumber = Number(id);
  return getOne(idAsNumber);
};

export const findHighPriorityService = (): ToDo[] | [] => getHighPriority();

export const updateToDoService = (id: string): ToDo | undefined => {
  const idAsNumber = Number(id);
  return updateToDo(idAsNumber);
};

export const deleteToDoService = (id: string): void => {
  const idAsNumber = Number(id);
  return deleteToDo(idAsNumber);
};
