import { Button, Table, Popconfirm, Tag } from "antd";
import CategoryForm from "../components/CategoryForm";
import { useCategories } from "../context/CategoryContext";

export default function Categories() {
  const {
    categories,
    setIsModalOpen,
    setEditingCategory,
    removeCategory
  } = useCategories();

  const columns = [
    { title: "Name", dataIndex: "name" },
    {
      title: "Color",
      render: (cat: any) => (
        <Tag color={cat.color}>{cat.color || "No Color"}</Tag>
      )
    },
    {
      title: "Actions",
      render: (cat: any) => (
        <div style={{ display: "flex", gap: 10 }}>
          <Button
            type="primary"
            onClick={() => {
              setEditingCategory(cat);
              setIsModalOpen(true);
            }}
          >
            Edit
          </Button>

          <Popconfirm
            title="Delete this category?"
            onConfirm={() => removeCategory(cat.id)}
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </div>
      )
    }
  ];

  return (
    <div style={{ maxWidth: 800, margin: "50px auto" }}>
      <div style={{ textAlign: "right", marginBottom: 20 }}>
        <Button
          type="primary"
          onClick={() => {
            setEditingCategory(null);
            setIsModalOpen(true);
          }}
        >
          Add Category
        </Button>
      </div>

      <Table
        rowKey="id"
        columns={columns}
        dataSource={categories}
        pagination={false}
      />

      <CategoryForm />
    </div>
  );
}
