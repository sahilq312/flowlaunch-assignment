import useTaskStore from "../store/store";
import { useState } from "react";
import TaskProgress from "./progress.jsx";
const Header = () => {
    const { addTask, tasks } = useTaskStore();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = () => {
        addTask({title, description, status: 'To Do'});
        setTitle('');
        setDescription('');
    }
    return (
       <div className="flex justify-between items-center w-full sm:p-10 p-3 ">
           <div className="">
               <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">Task Manager</h1>
               <p>{tasks.length}</p>
           </div>
           <div>
           <button className="bg-red-500 h-9 px-4 py-2 rounded-lg text-white flex items-center" onClick={handleSubmit}>Add Task</button>
           </div>

       </div>
    )
}

export default Header;
