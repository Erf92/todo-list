import Container from "../container/Container";
import SearchAndAdd from "../searchAndAdd/SearchAndAdd";
import TodoBox from "../todoBox/TodoBox";

function TodoItems() {
  return (
    <div className="bg-light rounded-lg p-4 w-full max-w-2xl mx-auto dark:bg-dark">
      <Container>
        <SearchAndAdd />
        <TodoBox />
      </Container>
    </div>
  );
}

export default TodoItems;
