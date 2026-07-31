import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface FormData {
  title: string;
  description: string;
  category: string;
  completed: boolean;
}

function TodoForm() {
  const { register, handleSubmit } = useForm<FormData>();
  const nav = useNavigate();

  function submitForm(data: FormData) {
    axios.post("http://localhost:3000/todos", data).then(() => {
      alert("Thêm thành công");
      nav("/list");
    });
  }

  return (
    <div>
      <h2 className="text-3xl mb-2">Thêm Todo</h2>

      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <label>Title</label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            {...register("title")}
          />
        </div>

        <div>
          <label>Description</label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            {...register("description")}
          />
        </div>

        <div>
          <label>Danh mục</label>
          <select
            className="w-full border rounded-lg px-3 py-2"
            {...register("category")}
          >
            <option value="">-- Chọn danh mục --</option>
            <option value="Học tập">Học tập</option>
            <option value="Công việc">Công việc</option>
            <option value="Cá nhân">Cá nhân</option>
          </select>
        </div>

        <div>
          <label>
            <input type="checkbox" {...register("completed")} />
            Hoàn thành
          </label>
        </div>

        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default TodoForm;