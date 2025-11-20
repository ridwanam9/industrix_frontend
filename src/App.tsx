import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import { TodoProvider } from "./context/TodoContext";
import { CategoryProvider } from "./context/CategoryContext";

function App() {
  return (
    <BrowserRouter>
      <CategoryProvider>
        <TodoProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </TodoProvider>
      </CategoryProvider>
    </BrowserRouter>
  );
}

export default App;

