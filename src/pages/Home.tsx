import TodoList from "../components/TodoList";
import { Input, Select } from "antd";
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
    <div
      style={{
        maxWidth: 900,
        margin: "30px auto",
        padding: "0 16px",
      }}
    >
      {/* Top Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          marginBottom: 20,
        }}
      >
        <Input.Search
          placeholder="Search todos..."
          onSearch={(v) => setSearch(v)}
          style={{
            flex: 1,
            minWidth: 180,
          }}
        />

      </div>

      {/* Filters */}
      <div
        style={{
          display: "flex",
          rowGap: 12,
          columnGap: 12,
          flexWrap: "wrap",
          marginBottom: 20,
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

      <TodoList />
      <TodoForm />
    </div>
  );
}
