import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import TodoList from "./components/pages/TodoList";
import TodoForm from "./components/pages/TodoForm";

function App() {
  const handleAddTodo = async (
    title: string,
    description: string,
    priority: string
  ) => {
    const newTodo = {
      title,
      description,
      priority,
      completed: false,
    };

    await axios.post("http://localhost:3000/todos", newTodo);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route
          path="/add"
          element={<TodoForm addTodo={handleAddTodo} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;