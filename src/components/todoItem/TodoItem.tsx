import { useState } from "react";
import { useTasksContext } from "../../context/TasksContext";
import { Task } from "../../types/task";
import EditIcon from "../editIcon/EditIcon";
import TrashIcon from "../trashIcon/TrashIcon";
import { FaCheckDouble, FaRegCircle } from "react-icons/fa";

interface ITodoItem {
  item: Task;
}

function TodoItem({ item }: ITodoItem) {
  const { setTasks, tasks } = useTasksContext();
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const handleDelete = (id: number) => {
    setTasks((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEdit = (item: Task) => {
    setEditingId(item.id);
    setEditText(item.title);
  };

  const handleSave = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: editText } : task
      )
    );
    setEditingId(null);
  };

  const toggleTaskStatus = () => {
    const updatedTask = tasks.map((task) =>
      task.id === item.id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTask);
  };

  return (
    <div className="border rounded px-3 py-2">
      {editingId === item.id ? (
        <div className="flex flex-col sm:flex-row gap-2 mt-3  justify-between items-center text-base md:text-lg">
          <input
            autoFocus
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (!editText.trim()) {
                  e.preventDefault();
                  return;
                }
                handleSave(item.id);
              }
            }}
            className={`flex-1 px-4 py-2 text-dark rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
              !editText.trim() && "border-red-500"
            }`}
            placeholder="Edit Task"
          />
          {!editText.trim() && (
            <p className="text-red-500 text-sm mt-1">Task cannot be empty</p>
          )}
          <div className="flex gap-2">
            <button
              onClick={() => setEditingId(null)}
              disabled={!editText.trim()}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-dark rounded-lg transition-colors duration-200 flex items-center gap-1"
            >
              cancel
            </button>
            <button
              onClick={() => handleSave(item.id)}
              className={`px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 flex items-center gap-1 ${
                !editText.trim() ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              save
            </button>
          </div>
        </div>
      ) : (
        <div className={`flex justify-between text-base md:text-lg`}>
          <p
            className={`cursor-pointer ${
              item.completed ? "line-through text-gray-400" : "dark:text-white"
            }`}
          >
            {item.title}
          </p>
          <div className="flex items-center gap-3">
            {item.completed ? (
              <FaCheckDouble
                className="text-green-500 cursor-pointer text-xl"
                onClick={toggleTaskStatus}
              />
            ) : (
              <FaRegCircle
                className="text-gray-400 hover:text-green-500 cursor-pointer text-xl"
                onClick={toggleTaskStatus}
              />
            )}
            <EditIcon
              className={`cursor-pointer dark:text-white ${
                item.completed ? "opacity-30 pointer-events-none" : ""
              }`}
              onClick={() => handleEdit(item)}
            />
            <TrashIcon onClick={() => handleDelete(item.id)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
