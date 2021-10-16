import { useLocation } from "react-router";
import { Button } from "./Button";

export const Header = ({ title, onAdd, showAdd, addTask, about }) => {
  const location = useLocation();

  return (
    <header className="header">
      {location.pathname === "/UserHomePage" && (
        <h1 style={{ marginTop: "15px", textAlign: "left" }}>
          {showAdd ? addTask : title}
        </h1>
      )}
      {location.pathname === "/UserHomePage" && (
        <Button
          className="btn"
          color={showAdd ? "#fc2f20de" : "#FFA000d3"}
          text={showAdd ? "Close" : "Add a Task"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Tasks",
  addTask: "Add a Task",
};
