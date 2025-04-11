import { CreateToDoDto } from "../dtos/create-to-do.dto";

export interface ToDo {
  id: number;
  title: string;
  done: boolean;
  priority: "low" | "normal" | "high";
}

// to-dos in memory data structure
let toDos_inMemoryDB: ToDo[] = [
  {
    id: 1,
    title: "Attend the bachelor's meeting",
    done: false,
    priority: "high",
  },
  {
    id: 2,
    title: "Take a break",
    done: false,
    priority: "normal",
  },
  {
    id: Date.now() + 3,
    title: "Prepare food",
    done: false,
    priority: "low",
  },
  {
    id: Date.now() + 4,
    title: "Play football",
    done: true,
    priority: "high",
  },
];

export const create = (createToDoDto: CreateToDoDto): ToDo => {
  const toDo = {
    id: Date.now(),
    title: createToDoDto.title,
    done: false,
    priority: createToDoDto.priority,
  };

  toDos_inMemoryDB.push(toDo);

  return toDo;
};

export const getAll = (): ToDo[] => toDos_inMemoryDB;

export const getOne = (id: number): ToDo | null => {
  const toDos = toDos_inMemoryDB.filter((toDo) => toDo.id === id);
  if (toDos.length === 0) return null;
  else return toDos[0];
};

export const getHighPriority = (): ToDo[] | [] =>
  toDos_inMemoryDB.filter((toDo) => toDo.priority === "high");

export const updateToDo = (id: number): ToDo | undefined => {
  for (let i = 0; i < toDos_inMemoryDB.length; i++) {
    if (toDos_inMemoryDB[i].id === id) {
      toDos_inMemoryDB[i].done = true;
      return toDos_inMemoryDB[i];
    }
  }
  return undefined;
};

export const deleteToDo = (id: number): void => {
  toDos_inMemoryDB = toDos_inMemoryDB.filter((toDo) => toDo.id !== id);
};
