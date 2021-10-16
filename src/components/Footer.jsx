import { Link } from "react-router-dom";
import { useLocation } from "react-router";

export const Footer = () => {
  const location = useLocation();

  return (
    <footer>
      {location.pathname === "/UserHomePage" ? (
        <div className="footer-inner">
          <Link to="/about">
            <p
              className="about-link-text"
              style={{
                fontSize: "20px",
                fontWeight: "500",
                transition: "0.3s ease",
              }}
            >
              About
            </p>
          </Link>
        </div>
      ) : (
        ""
      )}
    </footer>
  );
};
