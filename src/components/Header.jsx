import { useLocation } from "react-router";
import { signOut } from "../firebase/auth";
import { Button } from "./Button";

export const Header = ({ title, onAdd, showAdd, addTask, about }) => {
  const location = useLocation();

  return (
    <header className="header">
      {location.pathname === "/" && (
        <div className="title-and-sign-out-button">
          <h1 style={{ marginTop: "15px", textAlign: "left" }}>
            {showAdd ? addTask : title}
          </h1>
          <button className="sign-out-button" onClick={signOut}>
            Sign Out
          </button>
        </div>
      )}
      <p className="header-description">
        You can add a taks downbelow.
        <br /> Just click the button.
      </p>
      {location.pathname === "/" && (
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
