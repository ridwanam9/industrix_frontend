import TodoList from "../components/TodoList";
import { Input } from "antd";
import { useTodos } from "../context/TodoContext";

export default function Home() {
  const { setSearch } = useTodos();

  return (
    <div style={{ maxWidth: 800, margin: "50px auto" }}>
      <Input.Search
        placeholder="Search todos..."
        onSearch={(v) => setSearch(v)}
        style={{ marginBottom: 20 }}
      />
      <TodoList />
    </div>
  );
}
