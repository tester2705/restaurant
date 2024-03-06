/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import "./navbar.css";

function Navbar() {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 80 ? setStickyClass("sticky") : setStickyClass("");
    }
  };

  return (
    <header className={stickyClass}>
      <a href="#" className="logo">
        <i className="bx bxs-home"></i>
        <h3>&nbsp;Restaurant</h3>
      </a>

      <ul className="navlist">
        <li>
          <a href="#home" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#shop">Our Shop</a>
        </li>
        <li>
          <a href="#review">Our Customer</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>

      <div className="nav-icons">
        <i className="bx bx-search"></i>
        <i className="bx bx-cart"></i>
        <div id="menu-icon">
          <i className="bx bx-menu"></i>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
