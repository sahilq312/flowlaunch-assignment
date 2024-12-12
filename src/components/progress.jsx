import useTaskStore from "../store/store";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";

const TaskProgress = () => {
  const { tasks } = useTaskStore();
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.status).length;
  const progressPercentage = Math.round((completedTasks / totalTasks) * 100);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Task Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          {completedTasks}/{totalTasks} tasks completed
        </p>
        <Progress value={progressPercentage} className="w-full" />
      </CardContent>
    </Card>
  );
};

export default TaskProgress;
