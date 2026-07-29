import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface IToDoItem {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
}

export default function ToDoList() {
  const [todos, setTodos] = useState<IToDoItem[]>([]);

  useEffect(() => {
    loadTodos();
  }, []);

  async function loadTodos() {
    try {
      const res = await axios.get("http://localhost:3000/todos");
      setTodos(res.data);
    } catch (error) {
      alert("Lỗi tải dữ liệu");
    }
  }

  async function handleDelete(id: number) {
    if (!confirm("Xóa hay không?")) return;

    await axios.delete("http://localhost:3000/todos/" + id);
    loadTodos();
  }

  return (
    <div>
      <h2 className="text-3xl mb-4">Todo List</h2>

      <table className="w-full border border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Title</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">{item.id}</td>

              <td className="border p-2">{item.title}</td>

              <td className="border p-2">
                {item.completed ? "Hoàn thành" : "Chưa hoàn thành"}
              </td>

              <td className="border p-2">
                <Link to={`/edit/${item.id}`}>
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">
                    Edit
                  </button>
                </Link>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
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
