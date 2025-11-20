import TodoList from "../components/TodoList";
import { Input, Select, Card } from "antd";
import { useTodos } from "../context/TodoContext";
import { useCategories } from "../context/CategoryContext";
import TodoForm from "../components/TodoForm";

export default function Home() {
  const {
    setSearch,
    setStatusFilter,
    setCategoryFilter,
    setPriorityFilter,
  } = useTodos();

  const { categories } = useCategories();

  return (
    <>
      {/* FILTER CARD */}
      <Card
        style={{
          marginBottom: 20,
          borderRadius: 12,
        }}
      >
        {/* Search */}
        <Input.Search
          placeholder="Search todos..."
          onSearch={(v) => setSearch(v)}
          style={{ marginBottom: 16 }}
        />

        {/* Filters */}
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <Select
            placeholder="Status"
            allowClear
            onChange={(v) => setStatusFilter(v || "")}
            style={{ width: 160 }}
            options={[
              { value: "completed", label: "Completed" },
              { value: "pending", label: "Pending" }
            ]}
          />

          <Select
            placeholder="Category"
            allowClear
            onChange={(v) => setCategoryFilter(v || "")}
            style={{ width: 160 }}
            options={categories.map((c: any) => ({
              value: c.id,
              label: c.name,
            }))}
          />

          <Select
            placeholder="Priority"
            allowClear
            onChange={(v) => setPriorityFilter(v || "")}
            style={{ width: 160 }}
            options={[
              { value: "high", label: "High" },
              { value: "medium", label: "Medium" },
              { value: "low", label: "Low" },
            ]}
          />
        </div>
      </Card>

      {/* Todo List */}
      <TodoList />
      <TodoForm />
    </>
  );
}
