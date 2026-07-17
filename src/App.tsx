import { useState } from "react";
import TodoList from "./components/pages/TodoList";
import { Todo } from "./components/pages/Todo";

function App() {
  const [todos] = useState<Todo[]>([
    { id: 1, title: "Học React" },
  ]);

  return (
    <TodoList todos={todos} />
  );
}

export default App;