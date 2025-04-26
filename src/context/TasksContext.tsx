import {
  createContext,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

export interface Task {
  id: number;
  title: string;
}

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
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};
