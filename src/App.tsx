import { Toaster } from "react-hot-toast";
import { Link, Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList.tsx";
import TodoForm from "./components/TodoForm.tsx";


function App() {
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">
            <strong>WEB502 App</strong>
          </Link>

          <div className="flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-200">
              Trang chủ
            </Link>

            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>

            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto mt-10 px-4">
        <Routes>
          <Route
            path="/"
            element={
              <div className="text-center">
                <h1 className="text-4xl font-bold">
                  Chào mừng đến với WEB502
                </h1>
              </div>
            }
          />

          <Route path="/list" element={<TodoList />} />
          <Route path="/add" element={<TodoForm />} />
          <Route path="/edit/:id" element={<TodoForm />} />
        </Routes>
      </div>

      <Toaster />
    </>
  );
}

export default App;