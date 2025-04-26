import TodoItems from "../../components/todoItems/TodoItems"

function Home() {
  return (
    <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-medium my-14">Task Manager</h1>
        <TodoItems />
    </div>
  )
}

export default Home