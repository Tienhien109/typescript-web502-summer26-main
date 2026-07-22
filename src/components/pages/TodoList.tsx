import { Link } from "react-router-dom";
import { Todo } from "./Todo";

type Props = {
  todos: Todo[];
};

function TodoList({ todos }: Props) {
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ textAlign: "center" }}>ToDoList</h2>

        <Link to="/add">
          <button>Thêm Todo</button>
        </Link>
      </div>

      <table
        border={1}
        cellPadding={10}
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>Chưa hoàn thành</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;