import { createContext, useContext, useState, useEffect } from "react";
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory
} from "../api/categories";

const CategoryContext = createContext<any>(null);

export const CategoryProvider = ({ children }: any) => {
  const [categories, setCategories] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadCategories = async () => {
    const res = await getCategories();
    setCategories(res.data);
  };

  const addCategory = async (data: any) => {
    await createCategory(data);
    loadCategories();
  };

  const editCategory = async (id: number, data: any) => {
    await updateCategory(id, data);
    loadCategories();
  };

  const removeCategory = async (id: number) => {
    await deleteCategory(id);
    loadCategories();
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        categories,
        addCategory,
        editCategory,
        removeCategory,
        editingCategory,
        setEditingCategory,
        isModalOpen,
        setIsModalOpen
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategories = () => useContext(CategoryContext);
