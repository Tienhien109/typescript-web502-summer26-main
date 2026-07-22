import { useState, type ReactElement } from "react";
import TodoList from "./components/pages/TodoList";
import { Todo } from "./components/pages/Todo";

const TodoListComponent = TodoList as unknown as (props: {
  todos: Todo[];
}) => ReactElement;

function App() {
  const [todos] = useState<Todo[]>([
    { id: 1, title: "Học React" },
    { id: 2, title: "Học TypeScript" },
    { id: 3, title: "Làm bài tập" },
  ]);

  return (
    <>
      {/* Navbar */}
      <nav
        style={{
          background: "#0d6efd",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 30px",
        }}
      >
        <h2>WEB502 App</h2>

        <div style={{ display: "flex", gap: "30px" }}>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Trang chủ
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Danh sách
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Thêm mới
          </a>
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Đăng nhập
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Đăng ký
          </a>
        </div>
      </nav>

      {/* Nội dung */}
      <div style={{ width: "80%", margin: "40px auto" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "48px",
            marginBottom: "30px",
          }}
        >
          Chào mừng đến với WEB502
        </h1>

        <TodoList todos={todos} />
      </div>
    </>
  );
}

export default App;