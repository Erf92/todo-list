import { useTasksContext } from "../../context/TasksContext";
import TrashIcon from "../trashIcon/TrashIcon";

interface ITodoItem {
  title: string;
  id: number;
}

function TodoItem({ title, id }: ITodoItem) {
  const { setTasks } = useTasksContext();

  const handleDelete = (id: number) => {
    setTasks((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="border rounded px-3 py-2">
      <div className="flex justify-between text-base md:text-lg">
        <p>{title}</p>
        <TrashIcon onClick={() => handleDelete(id)} />
      </div>
    </div>
  );
}

export default TodoItem;
