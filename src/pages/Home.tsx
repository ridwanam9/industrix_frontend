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
    setPriorityFilter
  } = useTodos();

  const { categories } = useCategories();

  return (
    <div style={{ maxWidth: 900, margin: "50px auto" }}>
      {/* --- FILTER BAR --- */}
      <div
        style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          marginBottom: 20,
        }}
      >
        {/* Search */}
        <Input.Search
          placeholder="Search todos..."
          onSearch={(v) => setSearch(v)}
          style={{ width: 220 }}
        />

        {/* Status Filter */}
        <Select
          placeholder="Status"
          allowClear
          onChange={(v) => setStatusFilter(v || "")}
          style={{ width: 150 }}
          options={[
            { value: "completed", label: "Completed" },
            { value: "pending", label: "Pending" }
          ]}
        />

        {/* Category Filter */}
        <Select
          placeholder="Category"
          allowClear
          onChange={(v) => setCategoryFilter(v || "")}
          style={{ width: 150 }}
          options={categories.map((cat: any) => ({
            value: cat.id,
            label: cat.name
          }))}
        />

        {/* Priority Filter */}
        <Select
          placeholder="Priority"
          allowClear
          onChange={(v) => setPriorityFilter(v || "")}
          style={{ width: 150 }}
          options={[
            { value: "high", label: "High" },
            { value: "medium", label: "Medium" },
            { value: "low", label: "Low" }
          ]}
        />
      </div>

      {/* --- TODO LIST --- */}
      <TodoList />

      {/* --- FORM MODAL --- */}
      <TodoForm />
    </div>
  );
}
