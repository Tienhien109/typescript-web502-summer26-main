import { FC, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

type TodoFormProps = {
  addTodo: (title: string) => void;
};

const TodoForm: FC<TodoFormProps> = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const trimmed = title.trim();

    if (!trimmed) return;

    addTodo(trimmed);
    setTitle("");

    navigate("/");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Thêm Todo</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nhập công việc"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button type="submit">Thêm</button>
      </form>
    </div>
  );
};

export default TodoForm;