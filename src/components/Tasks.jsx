import { Task } from "./Task";

export const Tasks = ({ tasks, onDelete, onChecked }) => {
  return (
    <div className="tasks-container">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onChecked={onChecked}
        />
      ))}
    </div>
  );
};
