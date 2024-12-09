import useTaskStore from "../store/store";
import { useState } from "react";
const Header = () => {
    const { addTask } = useTaskStore();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = () => {
        addTask({title, description, status: 'To Do'});
        setTitle('');
        setDescription('');
    }
    return (
        <div>
            <h1>Task Manager</h1>
            <input type="text" placeholder="Enter task title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Enter task description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button onClick={handleSubmit}>Add Task</button>
        </div>
    )
}

export default Header;
