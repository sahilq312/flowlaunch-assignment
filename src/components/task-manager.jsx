import  { useState } from "react";
import useTaskStore from "../store/store";
import "react-tabulator/lib/styles.css";
import { ReactTabulator } from "react-tabulator";
import { toast } from "sonner";

const columns = [
  { title: "ID", field: "id", headerSort: false, width: 50 },
  { title: "Title", field: "title", editor: "input" },
  { title: "Description", field: "description", editor: "input" },
  {
    title: "Status",
    field: "status",
    editor: "list",
    editorParams: {
      values: { "To do": "To do", "Done": "Done" },
    },
    formatter: (cell) => {
      const value = cell.getValue();
      const color =
      value === "Done"
        ? "bg-green-100 text-green-700"
        : "bg-yellow-100 text-yellow-700";
    return `<span class="px-2 py-1 rounded ${color}">${value}</span>`;
  },
  cellClick: (e, cell) => {
    const taskId = cell.getRow().getData().id;
    const currentStatus = cell.getValue(); 
    const newStatus = currentStatus === "To do" ? "Done" : "To do"; 

    const { updateStatus } = useTaskStore.getState(); 
    updateStatus(taskId, newStatus);
    cell.setValue(newStatus);
    toast.success("updated the status")
  },
  },
  {
    title: "Action",
    field: "action",
    formatter: (cell) => {
      const id = cell.getRow().getData().id;
      return `<button 
                class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600" 
                data-id="${id}">Delete</button>`;
    },
    cellClick: (e, cell) => {
      const id = cell.getRow().getData().id;
      const { deleteTask } = useTaskStore.getState(); 
      deleteTask(id);
    },
    width: 100,
  },
];


const TaskManager = () => {
  const { tasks } = useTaskStore();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => setSearchQuery(e.target.value.toLowerCase());
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery)
  );

  if (!tasks || tasks.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-64 text-gray-500">
        <p>No tasks available. Start by adding a new task!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 gap-6">
      <div className="w-full md:w-2/3 bg-white sm:p-4 rounded shadow">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search tasks by title..."
          className="w-full h-8 sm:p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div className="w-full md:w-4/5 bg-white sm:p-4 rounded shadow">
        <ReactTabulator
          className="tabulator-modern"
          data={filteredTasks}
          columns={columns}
          options={{
            pagination: "local",
            paginationSize: 10,
            movableColumns: false,
            paginationCounter: "rows",
          }}
        />
      </div>
    </div>
  );
};

export default TaskManager;
