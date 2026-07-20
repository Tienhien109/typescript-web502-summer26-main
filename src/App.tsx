import { useState } from "react";
import TodoList from "./components/pages/TodoList";
import { Todo } from "./components/pages/Todo";
import MyState from "./components/MyState";

function App() {
  const [todos] = useState<Todo[]>([
    { id: 1, title: "Học React" },
    { id: 2, title: "Làm bài Lab" },
    { id: 3, title: "Ôn TypeScript" },
  ]);

  return (
    <TodoList
      todos={todos}
          />
  );
}

export default App;