import useTaskStore from "../store/store";

const TaskManager = () => {
    const { tasks, deleteTask, updateTask } = useTaskStore();

    const handleEdit = (task) => {
        updateTask({...task, status: task.status === 'Done' ? 'To Do' : 'Done'});
    }
    const handleEditTitle = (task) => {
        updateTask({...task, title: prompt('Enter new title:')});
    }

    if (!tasks || tasks.length === 0) {
      return <div>Loading tasks...</div>; 
    }
  
    return (
      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <h3 style={{textDecoration: task.status === 'Done' ? 'line-through' : 'none'}}>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => handleEdit(task)}>Update</button>
            <button onClick={() => handleEditTitle(task)}>Edit Title</button>
          </div>
        ))}
      </div>
    );
  };

export default TaskManager;