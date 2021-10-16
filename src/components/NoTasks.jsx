import { FcOpenedFolder } from "react-icons/fc";

export const NoTasks = () => {
  return (
    <div
      className="no-tasks"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <FcOpenedFolder style={{ fontSize: "80px", marginTop: "-5px" }} />
      <p className="no-tasks-text">
        You have no tasks to show.
        <br /> Go ahead and add some!
      </p>
    </div>
  );
};
