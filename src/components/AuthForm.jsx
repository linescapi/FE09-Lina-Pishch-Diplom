import { useState } from "react";
import { useLocation } from "react-router";
import { Button } from "./Button";
import { SubmitButton } from "./SubmitButton";

export const AuthForm = ({
  submitBtnHandler,
  buttonName,
  routeBtnHandler,
  text,
}) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();

  const handleInputLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    submitBtnHandler(login, password);
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
        {location.pathname === "/login" ? "Log In" : "Sign Up"}
      </h3>
      <p style={{ marginTop: "15px", fontWeight: "500" }}>
        {location.pathname === "/login"
          ? "Enter your email and password downbelow."
          : "Enter you email and password to create an account. "}
      </p>
      <form className="login-container" onSubmit={handleSubmit}>
        <input
          className="login-input"
          type="email"
          placeholder="Email"
          value={login}
          onChange={handleInputLogin}
          required
        />
        <input
          className="password-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleInputPassword}
          required
        />
        {/* <Link to="/UserHomePage">
      <Button className="login-btn" text="Login" onClick={handleSubmit} />
    </Link> */}
        <SubmitButton className="login-btn" text={buttonName} />
        <Button
          className="switch-login-signup"
          onClick={routeBtnHandler}
          text={text}
        />
      </form>
    </div>
  );
};
