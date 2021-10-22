import { useLocation } from "react-router";
import { signOut } from "../firebase/auth";
import { Button } from "./Button";

export const Header = ({ title, onAdd, showAdd, addTask }) => {
  return (
    <header className="header">
      <div className="title-and-sign-out-button">
        <h1 style={{ textAlign: "left" }}>{showAdd ? addTask : title}</h1>
        <button className="sign-out-button" onClick={signOut}>
          Sign Out
        </button>
      </div>
      <p className="header-description">
        {showAdd ? "" : "You can add a taks downbelow. Just click the button."}
      </p>
      <Button
        className="btn"
        color={showAdd ? "#fc2f20de" : "#FFA000d3"}
        text={showAdd ? "Close" : "Add a Task"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Tasks",
  addTask: "Add a Task",
};
