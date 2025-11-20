import { Modal, Form, Input } from "antd";
import { useEffect } from "react";
import { useCategories } from "../context/CategoryContext";

export default function CategoryForm() {
  const {
    isModalOpen,
    setIsModalOpen,
    editingCategory,
    setEditingCategory,
    addCategory,
    editCategory
  } = useCategories();

  const [form] = Form.useForm();

  useEffect(() => {
    if (editingCategory) {
      form.setFieldsValue(editingCategory);
    } else {
      form.resetFields();
    }
  }, [editingCategory]);

  const handleSubmit = async () => {
    const values = await form.validateFields();

    if (editingCategory) {
      await editCategory(editingCategory.id, values);
    } else {
      await addCategory(values);
    }

    setIsModalOpen(false);
    setEditingCategory(null);
  };

  return (
    <Modal
      title={editingCategory ? "Edit Category" : "Add Category"}
      open={isModalOpen}
      onOk={handleSubmit}
      onCancel={() => {
        setIsModalOpen(false);
        setEditingCategory(null);
      }}
      okText="Save"
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="name"
          label="Category Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="color" label="Color Hex (#)">
          <Input placeholder="#3B82F6" />
        </Form.Item>
      </Form>
    </Modal>
  );
}
