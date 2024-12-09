import {create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [],
  setTasks: (newTasks) => set({ tasks: newTasks }),
  addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
  updateTask: (updatedTask) => 
        set((state) => ({
            tasks: state.tasks.map((task) => 
                task.id === updatedTask.id ? updatedTask : task)
        })),
  deleteTask: (taskId) => 
        set((state) => ({
            tasks: state.tasks.filter((task) => 
                task.id !== taskId)
        })),
}));

export default useTaskStore;
