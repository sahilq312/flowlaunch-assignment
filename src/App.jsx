import './App.css'
import { fetchTasks } from './utils/api';
import { useEffect } from 'react';
//import TaskManager from './components/task-manager';
import useTaskStore from './store/store';
//import Header from './components/header';
//import TaskProgress from './components/progress';
import { toast, Toaster } from 'sonner';
import Header from "./components/header.jsx";
import {Card} from "./components/ui/card.jsx";
import TaskManager from "./components/task-manager.jsx";

const App = () => {
  const { setTasks } = useTaskStore();

  useEffect(() => {
    const loadTasks = async () => {
      const tasks = await fetchTasks();
      setTasks(tasks);
      toast.success("Successfully fetched data")
    };

    loadTasks();
  }, [setTasks]);

  return (
      <div className=" bg-neutral-200 min-h-screen sm:p-6 ">
          <Card className='sm:min-h-[90vh] min-h-screen bg-white'>
            <Header />
            <TaskManager/>
            <Toaster/>
          </Card>
      </div>
  )
}

export default App

// id | title | description         | status  | actions
//  1 | create|this is a description| (To Do) |  :
