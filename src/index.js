import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./userHomePage.css";
import reportWebVitals from "./reportWebVitals";
import { MainPage } from "./components/MainPage";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MainPage />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
