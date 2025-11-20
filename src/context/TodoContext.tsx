import { createContext, useContext, useState, useEffect } from "react";
import { getTodos } from "../api/todos";

const TodoContext = createContext<any>(null);

export const TodoProvider = ({ children }: any) => {
  const [todos, setTodos] = useState([]);
  const [pagination, setPagination] = useState({
    current_page: 1,
    total_pages: 1,
  });
  const [search, setSearch] = useState("");

  const loadTodos = async (page = 1) => {
    const res = await getTodos(page, search);
    setTodos(res.data.data);
    setPagination(res.data.pagination);
  };

  useEffect(() => {
    loadTodos();
  }, [search]);

  return (
    <TodoContext.Provider
      value={{ todos, pagination, search, setSearch, loadTodos }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);
