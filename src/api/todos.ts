import { api } from "./axios";

export const getTodos = (page: number = 1, search: string = "") =>
  api.get(`/todos?page=${page}&search=${search}`);

export const createTodo = (data: any) =>
  api.post("/todos", data);

export const updateTodo = (id: number, data: any) =>
  api.put(`/todos/${id}`, data);

export const deleteTodo = (id: number) =>
  api.delete(`/todos/${id}`);

export const toggleTodo = (id: number) =>
  api.patch(`/todos/${id}/complete`);
