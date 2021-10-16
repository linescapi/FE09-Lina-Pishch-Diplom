import { useState } from "react";

export const ShowFinishedTasks = () => {
  const [show, setShow] = useState(false);

  return (
    <input
      type="checkbox"
      checked={show}
      value={show}
      onChange={(e) => setShow(e.currentTarget.checked)}
    />
  );
};
