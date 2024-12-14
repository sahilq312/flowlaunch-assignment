import useTaskStore from "../store/store";
import { useState } from "react";
import CreateTaskForm from "./create.jsx";
const Header = () => {

    return (
       <div className="flex justify-between items-center w-full sm:p-10 p-3 ">
           <div className="">
               <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">Task Manager</h1>
           </div>
           <div>
          {/*  <button className="bg-red-500 h-9 px-4 py-2 rounded-lg text-white flex items-center" onClick={handleSubmit}>Add Task</button> */}
              <CreateTaskForm/>
           </div>

       </div>
    )
}

export default Header;
