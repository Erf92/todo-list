import { Task } from "../types/task";

const STORAGE_KEY = "tasks";

export const loadTasks = (): Task[] => {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
};

export const saveTasks = (tasks: Task[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};
