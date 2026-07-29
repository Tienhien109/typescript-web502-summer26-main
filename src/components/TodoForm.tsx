import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

interface FormData {
  title: string;
  description: string;
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
      axios
        .get(`http://localhost:3000/todos/${id}`)
        .then((res) => reset(res.data));
    }
  }, [id, reset]);

  const submitForm = async (data: FormData) => {
    if (id) {
      await axios.put(`http://localhost:3000/todos/${id}`, data);
    } else {
      await axios.post("http://localhost:3000/todos", data);
      
    }

    navigate("/list");
  };

  return (
    <div>
      <h2 className="text-3xl mb-4">
        {id ? "Cập nhật Todo" : "Thêm Todo"}
      </h2>

      <form onSubmit={handleSubmit(submitForm)}>
        <div className="mb-4">
          <label className="block mb-1">Title</label>

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
            <p className="text-red-500 mt-1">
              {errors.title.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1">Mô tả</label>

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