import { FaTimes } from "react-icons/fa";
import { BiPencil } from "react-icons/bi";
import { useState } from "react";

export const Task = ({ task, onDelete, onChecked, onEdit }) => {
  const [checked, setChecked] = useState(false);

  const checkedTask = (e) => {
    onChecked(task.id);
    setChecked(e.currentTarget.checked);
  };

  return (
    <div className={`task ${task.checked ? "checked" : ""} `}>
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

      <div className="task-icons">
        <FaTimes
          style={{ color: "#FC2E20d7", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
        <BiPencil
          className="edit-icon"
          style={{ fontSize: "19px", marginTop: "5px", cursor: "pointer" }}
          onClick={onEdit}
        />
      </div>
    </div>
  );
};
