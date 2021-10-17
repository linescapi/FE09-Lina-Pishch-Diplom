// import { Link } from "react-router-dom";
import { Button } from "./Button";
// import { Login } from "./Login";
// import { SingUp } from "./SingUp";
import { useLocation } from "react-router";
// import { UserHomePage } from "./UserHomePage";

export const MainPage = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && (
        <div className="container" style={{ textAlign: "center" }}>
          <h3
            className="welcome-title"
            style={{
              margin: "15px 0",
              fontSize: "27px",
            }}
          >
            Welcome to the Tasks Tracker application! <br /> We would like to
            meet you.
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
            {/* <Link to="/login">
              <Button className="main-page-login-btn" text="Login" />
            </Link>
            <Link to="/singUp">
              <Button className="main-page-signp-btn" text="Sign up" />
            </Link> */}
            <Button className="main-page-login-btn" text="Login" />
            <Button className="main-page-signup-btn" text="Sign up" />
          </div>
        </div>
      )}
      {/* {location.pathname === "/login" && <Login />}
      {location.pathname === "/signUp" && <SingUp />}
      {location.pathname === "/UserHomePage" && <UserHomePage />} */}
    </>
  );
};
