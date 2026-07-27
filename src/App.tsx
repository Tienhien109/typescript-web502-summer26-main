import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./components/pages/TodoList";
import TodoForm from "./components/pages/TodoForm";

function App() {
  const handleAddTodo = (todo: any) => {
    // Add todo logic here
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/add" element={<TodoForm addTodo={handleAddTodo} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;