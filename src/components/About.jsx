import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="about-container">
      <h4>Version 1.0.0</h4>
      <Link to="/UserHomePage">
        <p
          className="go-back-link-text"
          style={{
            fontSize: "20px",
            fontWeight: "500",
            transition: "0.3s ease",
          }}
        >
          Go Back
        </p>
      </Link>
    </div>
  );
};
