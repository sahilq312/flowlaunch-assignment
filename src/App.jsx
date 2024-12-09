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
    <div>
      <Header />
      <TaskManager />
    </div>
  )
}

export default App
