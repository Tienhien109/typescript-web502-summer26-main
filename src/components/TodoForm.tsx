import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

interface FormData {
  title: string;
  description: string;
  category: string;
  completed: boolean;
}

function TodoForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    if (id) {
      axios.get("http://localhost:3000/todos/" + id).then((res) => {
        reset(res.data);
      });
    }
  }, []);

  function submitForm(data: FormData) {
    if (id) {
      axios.put("http://localhost:3000/todos/" + id, data).then(() => {
        navigate("/list");
      });
    } else {
      axios.post("http://localhost:3000/todos", data).then(() => {
        navigate("/list");
      });
    }
  }

  return (
    <div>
      <h2 className="text-3xl mb-4">
        {id ? "Cập nhật Todo" : "Thêm Todo"}
      </h2>

      <form onSubmit={handleSubmit(submitForm)}>
        <div className="mb-4">
          <label>Title</label>

          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            {...register("title", {
              required: "Không được để trống",
              minLength: {
                value: 5,
                message: "Tối thiểu 5 ký tự",
              },
            })}
          />

          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>

        <div className="mb-4">
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

        <div className="mb-4">
          <label>
            <input type="checkbox" {...register("completed")} /> Hoàn thành
          </label>
        </div>

        <div className="mb-4">
          <label>Mô tả</label>

          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            {...register("description")}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          {id ? "Cập nhật" : "Thêm"}
        </button>
      </form>
    </div>
  );
}

export default TodoForm;