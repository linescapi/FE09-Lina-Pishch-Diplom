import { Link } from "react-router-dom";
import { Button } from "./Button";
import { useState } from "react";

export const Login = ({ sumbitBtnHandler }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleInputLogin = (e) => {
    setLogin(e.traget.value);
  };

  const handleInputPassword = (e) => {
    setPassword(e.traget.value);
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // sumbitBtnHandler(login, password);
  };

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h3
        className="welcome-title"
        style={{
          margin: "15px 0",
          fontSize: "27px",
        }}
      >
        Login
      </h3>
      <p style={{ marginTop: "15px", fontWeight: "500" }}>
        Enter your username and password downbelow.
      </p>
      <div className="login-container">
        <input
          className="login-input"
          type="text"
          placeholder="Username"
          onChange={handleInputLogin}
        />
        <input
          className="password-input"
          type="password"
          placeholder="Password"
          onChange={handleInputPassword}
        />
        <Link to="/UserHomePage">
          <Button className="login-btn" text="Login" onClick={handleSubmit} />
        </Link>
      </div>
    </div>
  );
};
