import "./navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <h1>Real Estate</h1>
        </a>
        <a href="#">Home</a>
        <a href="#">Properties</a>
        <a href="#">Agents</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="right">
        <span>
          <a href="#">Login</a>
          <a href="#" className="register">
            Sign Up
          </a>
        </span>
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="logo"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a
            href="#"
            onClick={() => {
              setOpen(false);
            }}
          >
            Home
          </a>
          <a href="#">Properties</a>
          <a href="#">Agents</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Sign In</a>
          <a href="#">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
