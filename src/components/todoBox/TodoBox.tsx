import { FaClipboardList } from "react-icons/fa";
import { useTasksContext } from "../../context/TasksContext";
import TodoItem from "../todoItem/TodoItem";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function TodoBox() {
  const [filter, setFilter] = useState<"all" | "completed" | "active">("all");
  const { tasks } = useTasksContext();
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
  });

  return (
    <ul className="mt-3">
      <AnimatePresence>
        {tasks.length === 0 ? (
          <motion.div
            key="empty-message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="empty-state"
          >
            <FaClipboardList className="empty-icon" />
            <p>Add your first task!</p>
          </motion.div>
        ) : (
          <>
            <div className="filters flex gap-3 justify-center mb-2">
              <button
                className={`px-3 py-1 rounded-full text-sm border ${
                  filter === "all"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
                onClick={() => setFilter("all")}
              >
                All
              </button>
              <button
                className={`px-3 py-1 rounded-full text-sm border ${
                  filter === "active"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
                onClick={() => setFilter("active")}
              >
                Active
              </button>
              <button
                className={`px-3 py-1 rounded-full text-sm border ${
                  filter === "completed"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
                onClick={() => setFilter("completed")}
              >
                Completed
              </button>
            </div>
            {filteredTasks.map((item) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: "auto" }}
                exit={{
                  opacity: 0,
                  height: 0,
                  padding: 0,
                  margin: 0,
                  transition: { duration: 0.3 },
                }}
                transition={{ type: "spring", damping: 25 }}
              >
                <TodoItem item={item} />
              </motion.li>
            ))}
          </>
        )}
      </AnimatePresence>
    </ul>
  );
}

export default TodoBox;
