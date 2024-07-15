import React from 'react';
import { Task } from 'types';

interface TaskSummaryProps {
  tasks: Task[];
}

const TaskSummary: React.FC<TaskSummaryProps> = ({ tasks }) => {
  const pendingTasks = tasks.filter(task => !task.completed).length;

  return (
    <div className="task-summary">
      {tasks.length > 0 && pendingTasks > 0 ? (
        <p>Pending Tasks: {pendingTasks}</p>
      ) : (
        <p className="congrats">Congratulations! All tasks are completed.</p>
      )}
    </div>
  );
};

export default TaskSummary;
