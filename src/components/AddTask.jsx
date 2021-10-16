import { useState } from "react";

export const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [checked, setChecked] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault(); //preventDefault is for that it doean't actually submit to a page

    if (!text) {
      alert("Please add a task");
      return;
    }

    console.log(e);

    onAdd({ text, day, checked });

    //for clearing the form
    setText("");
    setDay("");
    setChecked(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn-block" />
    </form>
  );
};
