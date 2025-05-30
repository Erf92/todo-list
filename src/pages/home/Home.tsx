import ThemeToggle from "../../components/themeToggle/ThemeToggle";
import TodoItems from "../../components/todoItems/TodoItems";

function Home() {
  return (
    <div className="min-h-screen transition-colors duration-300 text-center dark:bg-black">
      <ThemeToggle />
      <h1 className="text-2xl md:text-4xl font-medium my-14 dark:text-white">
        Task Manager
      </h1>
      <TodoItems />
    </div>
  );
}

export default Home;
