import React, { FC, useState, FormEvent } from "react";

type TodoFormProps = {
    onAdd?: (title: string) => void;
};

const TodoForm: FC<TodoFormProps> = ({ onAdd }) => {
    const [title, setTitle] = useState<string>("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const trimmed = title.trim();
        if (!trimmed) return;
        onAdd?.(trimmed);
        setTitle("");
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

                <button type="submit"> Thêm </button>
            </form>
        </div>
    );
};

export default TodoForm;