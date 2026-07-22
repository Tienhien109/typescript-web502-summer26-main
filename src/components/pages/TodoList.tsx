import { Link } from "react-router-dom";
import { Todo } from "./Todo";
import { useState, useEffect } from "react";
import axios from "axios";

function TodoList() {
  // State lưu danh sách Todo
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
const [keyword, setKeyword] = useState("");
  // Hàm gọi API
const loadTodos = async () => {
  setLoading(true);

  const res = await axios.get("http://localhost:3000/todos");

  setTodos(res.data);

  setLoading(false);
};
const deleteTodo = async (id: number) => {
  await axios.delete(`http://localhost:3000/todos/${id}`);
  await loadTodos();
};
const filteredTodos = todos.filter((todo) =>
  todo.title.toLowerCase().includes(keyword.toLowerCase())
);
  // Khi component mở thì gọi API
  useEffect(() => {
    loadTodos();
  }, []);
if (loading) {
  return <h2>Loading chờ thêm chút...</h2>;
}
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ textAlign: "center" }}>Todo List</h2>
        <p>Số lượng Todo: {filteredTodos.length}</p>
<input
  type="text"
  placeholder="Tìm kiếm..."
  value={keyword}
  onChange={(e) => setKeyword(e.target.value)}
  style={{
    padding: 8,
    width: "300px",
    marginBottom: 20,
  }}
/>
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
          {filteredTodos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>
                {(todo as Todo & { completed?: boolean }).completed
                  ? "Done"
                  : "Pending"}
              </td>
              <td>
                <button onClick={() => deleteTodo(todo.id)}>
  Delete
</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;