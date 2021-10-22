import { FaTimes } from "react-icons/fa";
import { BiPencil } from "react-icons/bi";
import { GiCheckMark } from "react-icons/gi";
import { useState } from "react";

export const Task = ({
  task,
  onDelete,
  onChecked,
  onEdit,
  editTextValue,
  editDayValue,
  setTextEdit,
  setDayEdit,
}) => {
  const [checked, setChecked] = useState(false);
  const [edit, setEdit] = useState(false);

  const checkedTask = (e) => {
    onChecked(task.id);
    setChecked(e.currentTarget.checked);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //preventDefault is for that it doean't actually submit to a page
    if (!editTextValue) {
      alert("Please add a task or cancel changes.");
      return;
    }
    if (!editDayValue) {
      alert("Please add a task or cancel changes.");
      return;
    }
    console.log(e);

    onEdit(task.id);

    //for clearing the form
    setEdit(false);
  };

  return (
    <div className={`task ${task.checked ? "checked" : ""} `}>
      {edit ? (
        <form className="edit-task-inputs" onSubmit={onSubmit}>
          <input
            type="text"
            value={editTextValue}
            className="edit-task-input-text"
            onChange={setTextEdit}
            placeholder={task.text}
          />
          <input
            type="text"
            value={editDayValue}
            className="edit-task-input-day"
            onChange={setDayEdit}
            placeholder={task.day}
          />
        </form>
      ) : (
        <div className="task-element">
          <input
            type="checkbox"
            checked={checked}
            value={checked}
            onChange={checkedTask}
          />
          <div className="task-inner">
            <h3>{task.text}</h3>
            <p>{task.day}</p>
          </div>
        </div>
      )}
      <div className="task-icons">
        {edit ? (
          <FaTimes
            style={{ color: "#FC2E20d7", cursor: "pointer" }}
            onClick={() => setEdit(!edit)}
          />
        ) : (
          <FaTimes
            style={{ color: "#FC2E20d7", cursor: "pointer" }}
            onClick={() => onDelete(task.id)}
          />
        )}

        {edit ? (
          <GiCheckMark
            style={{
              fontSize: "17px",
              marginTop: "4px",
              cursor: "pointer",
              color: "black",
            }}
            onClick={onSubmit}
          />
        ) : (
          <BiPencil
            className="edit-icon"
            style={{ fontSize: "19px", marginTop: "5px", cursor: "pointer" }}
            onClick={() => setEdit(!edit)}
          />
        )}
      </div>
    </div>
  );
};
