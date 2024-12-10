//import './App.css'
import { fetchTasks } from './utils/api';
import { useEffect } from 'react';
import TaskManager from './components/task-manager';
import useTaskStore from './store/store';
import Header from './components/header';

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
    <div className='bg-gray-300 min-h-screen'>
      <Header />
      <TaskManager />
    </div>
  )
}

export default App
