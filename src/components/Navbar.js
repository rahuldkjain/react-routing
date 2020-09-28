import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const listStyle = {
    "textDecoration": "none",
    "color": "black"
  };
  return (
    <nav>
      <div className="logo">
        <Link to="/" style={listStyle}>
          Logo
        </Link>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to="/about" style={listStyle}>
              About
            </Link>
          </li>
          <li>
            <Link to="/shop" style={listStyle}>
              Shop
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
