import useTaskStore from "../store/store";
import { Progress } from "./ui/progress";

const TaskProgress = () => {
  const { tasks } = useTaskStore();
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.status).length;
  const progressPercentage = Math.round((completedTasks / totalTasks) * 100);

  return (
    <>
        <Progress value={progressPercentage} className="w-1/2 " />
    </>
  );
};

export default TaskProgress;
