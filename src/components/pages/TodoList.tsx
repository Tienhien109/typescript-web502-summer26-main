import { Link } from "react-router-dom";
import { Todo } from "./Todo";

type Props = {
  todos: Todo[];
};

function TodoList({ todos }: Props) {
  return (
    <>
      <div style={{ padding: 20 }}>
        <h2>Danh sách Todo</h2>
        <Link to="/add">
          <button> Thêm Todo </button>
        </Link>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
