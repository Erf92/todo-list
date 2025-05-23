import {
  createContext,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Task } from "../types/task";
import { loadTasks, saveTasks } from "../utils/localStorage";

interface TaskProvider {
  children: React.ReactNode;
}

interface TasksContext {
  tasks: Task[];
  setTasks: React.Dispatch<SetStateAction<Task[]>>;
}

const TasksContext = createContext({} as TasksContext);

export const useTasksContext = () => {
  return useContext(TasksContext);
};

export const TaskProvider = ({ children }: TaskProvider) => {
  const [tasks, setTasks] = useState<Task[]>(loadTasks);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};
