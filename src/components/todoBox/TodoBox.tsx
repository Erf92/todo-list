import { FaClipboardList } from "react-icons/fa";
import { useTasksContext } from "../../context/TasksContext";
import TodoItem from "../todoItem/TodoItem";
import { AnimatePresence, motion } from "framer-motion";

function TodoBox() {
  const { tasks } = useTasksContext();
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
          tasks.map((item) => (
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
          ))
        )}
      </AnimatePresence>
    </ul>
  );
}

export default TodoBox;
