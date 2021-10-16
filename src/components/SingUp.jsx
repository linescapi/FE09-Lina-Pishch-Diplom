import { Link } from "react-router-dom";
import React from "react";
import { Button } from "./Button";
import { useLocation } from "react-router";

export const SingUp = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/singUp" && (
        <div className="container" style={{ textAlign: "center" }}>
          <h3
            className="welcome-title"
            style={{
              margin: "15px 0",
              fontSize: "27px",
            }}
          >
            Sing Up
          </h3>
          <p style={{ marginTop: "15px", fontWeight: "500" }}>
            Create your username and password downbelow.
          </p>
          <div className="sing-up-container">
            <input
              className="sing-up-input"
              type="text"
              placeholder="Username"
            />
            <input
              className="password-input"
              type="password"
              placeholder="Password"
            />
            <Link to="/UserHomePage">
              <Button className="sing-up-btn" text="Sing up" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
