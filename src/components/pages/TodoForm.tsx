import { FC } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type TodoFormProps = {
  addTodo: (title: string, description: string, priority: string) => void;
};

type FormData = {
  title: string;
  description: string;
  priority: string;
};

const TodoForm: FC<TodoFormProps> = ({ addTodo }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    addTodo(data.title, data.description, data.priority);

    reset();

    navigate("/");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Thêm Todo</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Tiêu đề</label>
          <br />
          <input
            {...register("title", {
              required: "Tiêu đề không được để trống",
            })}
          />
          <p style={{ color: "red" }}>{errors.title?.message}</p>
        </div>

        <div>
          <label>Mô tả</label>
          <br />
          <textarea
            {...register("description", {
              required: "Mô tả không được để trống",
              minLength: {
                value: 10,
                message: "Mô tả tối thiểu 10 ký tự",
              },
            })}
          />
          <p style={{ color: "red" }}>{errors.description?.message}</p>
        </div>

        <div>
          <label>Priority</label>
          <br />
          <select
            {...register("priority", {
              required: "Chọn độ ưu tiên",
            })}
          >
            <option value="">--Chọn--</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <p style={{ color: "red" }}>{errors.priority?.message}</p>
        </div>

        <br />

        <button type="submit">Thêm Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;