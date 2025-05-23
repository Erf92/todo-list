import { useState } from "react";
import { useTasksContext } from "../../context/TasksContext";
import { Task } from "../../types/task";

function SearchAndAdd() {
  const { setTasks } = useTasksContext();
  const [input, setInput] = useState<string>("");

  const handleAdd = () => {
    if (input.trim() === "") return;

    const newTask: Task = {
      id: Date.now(),
      title: input.trim(),
    };

    setTasks((prev) => [...prev, newTask]);
    setInput("");
  };

  return (
    <div className="flex flex-wrap gap-2 min-w-[120px] justify-between">
      <input
        id="task-name"
        className="border rounded py-2 px-3 text-base md:text-xl flex-1 min-w-[150px]"
        type="text"
        placeholder="Add new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => (e.key == "Enter" ? handleAdd() : "")}
      />
      <button
        className="text-white font-bold py-2 px-4 rounded sm:w-auto w-full"
        style={{
          background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        }}
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
}

export default SearchAndAdd;
