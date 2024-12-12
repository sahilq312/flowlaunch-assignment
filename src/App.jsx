//import './App.css'
import { fetchTasks } from './utils/api';
import { useEffect } from 'react';
import TaskManager from './components/task-manager';
import useTaskStore from './store/store';
import Header from './components/header';
import TaskProgress from './components/progress';
import { Toaster } from 'sonner';

const App = () => {
  const { setTasks } = useTaskStore();

  useEffect(() => {
    const loadTasks = async () => {
      const tasks = await fetchTasks();
      setTasks(tasks);
    };

    loadTasks();
  }, [setTasks]);

  return (
    <div className=''>
      <TaskProgress />
      <Header />
      <TaskManager />
      <Toaster />
    </div>
  )
}

export default App
