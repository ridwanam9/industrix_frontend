import { Table, Button, Tag } from "antd";
import { useTodos } from "../context/TodoContext";

export default function TodoList() {
  const { todos, pagination, loadTodos } = useTodos();

  const columns = [
    { title: "Title", dataIndex: "title" },
    { title: "Description", dataIndex: "description" },
    {
      title: "Status",
      render: (todo: any) =>
        todo.completed ? (
          <Tag color="green">Completed</Tag>
        ) : (
          <Tag color="red">Pending</Tag>
        ),
    },
  ];

  return (
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
  );
}
