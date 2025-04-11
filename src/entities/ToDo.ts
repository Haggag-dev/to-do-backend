export default interface ToDo {
  id: number;
  title: string;
  done: boolean;
  priority: "low" | "normal" | "high";
}
