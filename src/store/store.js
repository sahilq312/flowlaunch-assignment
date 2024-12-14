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
  updateStatus: (taskId, newStatus) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? {...task, status: newStatus} : task
      ),
    })),
  deleteTask: (taskId) =>
    set((state) => {
      const filteredTasks = state.tasks.filter((task) => task.id !== taskId);

      const updatedTasks = filteredTasks.map((task, index) => ({
        ...task,
        id: index + 1,
      }));

      return { tasks: updatedTasks };
    }),
}));

export default useTaskStore;
