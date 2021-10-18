import { Button } from "./Button";
import { useLocation } from "react-router";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import { Link } from "react-router-dom";

export const MainPage = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/home" && (
        <div className="container" style={{ textAlign: "center" }}>
          <h3
            className="welcome-title"
            style={{
              margin: "15px 0",
              fontSize: "27px",
            }}
          >
            Welcome to the Tasks App!
          </h3>
          <p style={{ marginTop: "15px", fontWeight: "500" }}>
            If you have already an account click the button
            <span style={{ fontWeight: "700" }}>"Log In"</span> to continue.
          </p>
          <p style={{ marginTop: "15px", fontWeight: "500" }}>
            When you are the first time here click the button
            <span style={{ fontWeight: "700" }}>"Sign Up"</span> to create your
            own account.
          </p>
          <div className="start-page-buttons">
            <Link to="/login">
              <Button className="main-page-login-btn" text="Login" />
            </Link>
            <Link to="/signUp">
              <Button className="main-page-signup-btn" text="Sign up" />
            </Link>
          </div>
        </div>
      )}
      {location.pathname === "/login" && <Login />}
      {location.pathname === "/signUp" && <SignUp />}
    </>
  );
};
