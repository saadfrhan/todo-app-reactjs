import { create } from "zustand";

interface Todo {
  text: string;
  completed: boolean;
}

interface TodoState {
  tasks: Todo[];
  addTask: (text: string) => void;
  toggleTask: (index: number) => void;
  deleteTask: (index: number) => void;
  updateTask: (index: number, newText: string) => void;
}

export const useTodoStore = create<TodoState>()((set) => ({
  tasks: JSON.parse(localStorage.getItem("tasks")!) || [],
  addTask: (text) =>
    set((state) => {
      const newTasks = [...state.tasks, { text, completed: false }];
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return { tasks: newTasks };
    }),
  toggleTask: (index) =>
    set((state) => {
      const newTasks = state.tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return { tasks: newTasks };
    }),
  deleteTask: (index) =>
    set((state) => {
      const newTasks = state.tasks.filter((_, i) => i !== index);
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return { tasks: newTasks };
    }),
  updateTask: (index, newText) =>
    set((state) => {
      const newTasks = state.tasks.map((task, i) =>
        i === index ? { ...task, text: newText } : task
      );
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return { tasks: newTasks };
    }),
}));
