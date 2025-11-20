import { Modal, Form, Input, Select } from "antd";
import { useEffect } from "react";
import { useTodos } from "../context/TodoContext";

export default function TodoForm() {
  const {
    isModalOpen,
    setIsModalOpen,
    editingTodo,
    setEditingTodo,
    addTodo,
    editTodo
  } = useTodos();

  const [form] = Form.useForm();

  useEffect(() => {
    if (editingTodo) {
      form.setFieldsValue(editingTodo);
    } else {
      form.resetFields();
    }
  }, [editingTodo]);

  const handleSubmit = async () => {
    const values = await form.validateFields();

    if (editingTodo) {
      await editTodo(editingTodo.id, values);
    } else {
      await addTodo(values);
    }

    setIsModalOpen(false);
    setEditingTodo(null);
  };

  return (
    <Modal
      title={editingTodo ? "Edit Todo" : "Add Todo"}
      open={isModalOpen}
      onOk={handleSubmit}
      onCancel={() => {
        setIsModalOpen(false);
        setEditingTodo(null);
      }}
      okText="Save"
    >
      <Form form={form} layout="vertical">
        <Form.Item name="title" label="Title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name="description" label="Description">
          <Input.TextArea rows={3} />
        </Form.Item>

        <Form.Item name="priority" label="Priority">
          <Select
            options={[
              { value: "high", label: "High" },
              { value: "medium", label: "Medium" },
              { value: "low", label: "Low" },
            ]}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
