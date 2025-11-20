import { Table, Button, Tag, Popconfirm } from "antd";
import { useTodos } from "../context/TodoContext";

export default function TodoList() {
  const {
    todos,
    pagination,
    loadTodos,
    setIsModalOpen,
    setEditingTodo,
    removeTodo,
    toggleCompleteStatus
  } = useTodos();

  const columns = [
    { title: "Title", dataIndex: "title" },
    { title: "Description", dataIndex: "description" },
    {
      title: "Priority",
      dataIndex: "priority",
      render: (p: string) => {
        if (p === "high") return <Tag color="red">High</Tag>;
        if (p === "medium") return <Tag color="gold">Medium</Tag>;
        return <Tag color="green">Low</Tag>;
      }
    },
    {
      title: "Status",
      render: (todo: any) =>
        todo.completed ? (
          <Tag color="green">Completed</Tag>
        ) : (
          <Tag color="red">Pending</Tag>
        ),
    },
    {
      title: "Action",
      render: (todo: any) => (
        <div style={{ display: "flex", gap: 10 }}>
          <Button
            type="primary"
            onClick={() => {
              setEditingTodo(todo);
              setIsModalOpen(true);
            }}
          >
            Edit
          </Button>

          <Popconfirm
            title="Delete this todo?"
            onConfirm={() => removeTodo(todo.id)}
          >
            <Button danger>Delete</Button>
          </Popconfirm>

          <Button
            onClick={() => toggleCompleteStatus(todo.id)}
            type={todo.completed ? "default" : "dashed"}
          >
            {todo.completed ? "Undo" : "Complete"}
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div style={{ marginBottom: 20, textAlign: "right" }}>
        <Button
          type="primary"
          onClick={() => {
            setEditingTodo(null);
            setIsModalOpen(true);
          }}
        >
          Add Todo
        </Button>
      </div>

      <Table
        rowKey="id"
        columns={columns}
        dataSource={todos}
        pagination={{
          current: pagination.current_page,
          total: pagination.total_pages * 10,
          onChange: (page) => loadTodos(page),
        }}
      />
    </div>
  );
}
