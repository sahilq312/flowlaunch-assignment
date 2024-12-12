import { create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [],
  setTasks: (newTasks) => set({ tasks: newTasks }),
  addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
  updateTask: (updatedTask) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      ),
    })),
  deleteTask: (taskId) =>
    set((state) => {
      const filteredTasks = state.tasks.filter((task) => task.id !== taskId);

      // Reassign sequential IDs after deletion
      const updatedTasks = filteredTasks.map((task, index) => ({
        ...task,
        id: index + 1, // Reassign `id` based on new index
      }));

      return { tasks: updatedTasks };
    }),
}));

export default useTaskStore;
