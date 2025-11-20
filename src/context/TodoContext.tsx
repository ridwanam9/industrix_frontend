import { createContext, useContext, useState, useEffect } from "react";
import { getTodos, createTodo, updateTodo, deleteTodo, toggleTodo } from "../api/todos";

const TodoContext = createContext<any>(null);

export const TodoProvider = ({ children }: any) => {
  const [todos, setTodos] = useState([]);
  const [pagination, setPagination] = useState({
    current_page: 1,
    total_pages: 1,
  });
  const [search, setSearch] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");


  const loadTodos = async (page = 1) => {
    const res = await getTodos(
      page,
      search,
      statusFilter,
      categoryFilter,
      priorityFilter
    );

    setTodos(res.data.data);
    setPagination(res.data.pagination);
  };


  const addTodo = async (data: any) => {
    await createTodo(data);
    loadTodos();
  };

  const editTodo = async (id: number, data: any) => {
    await updateTodo(id, data);
    loadTodos();
  };

  const removeTodo = async (id: number) => {
    await deleteTodo(id);
    loadTodos();
  };

  const toggleCompleteStatus = async (id: number) => {
    await toggleTodo(id);
    loadTodos();
  };

  useEffect(() => {
    loadTodos();
  }, [search, statusFilter, categoryFilter, priorityFilter]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        pagination,
        search,
        setSearch,
        loadTodos,

        // NEW
        addTodo,
        editTodo,
        removeTodo,
        setEditingTodo,
        editingTodo,
        isModalOpen,
        setIsModalOpen,
        toggleCompleteStatus,

        statusFilter, setStatusFilter,
        categoryFilter, setCategoryFilter,
        priorityFilter, setPriorityFilter,

      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);
