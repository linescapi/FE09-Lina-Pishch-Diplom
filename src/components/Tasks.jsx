import { Task } from "./Task";

export const Tasks = ({
  tasks,
  onDelete,
  onChecked,
  onEdit,
  editTextValue,
  editDayValue,
  setTextEdit,
  setDayEdit,
}) => {
  return (
    <div className="tasks-container">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onChecked={onChecked}
          onEdit={onEdit}
          editTextValue={editTextValue}
          editDayValue={editDayValue}
          setTextEdit={setTextEdit}
          setDayEdit={setDayEdit}
        />
      ))}
    </div>
  );
};

//{edit && <input />}
//onClick={() => setEdit(!edit)}
