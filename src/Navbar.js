import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";

const Navbar = () => {
  const showSidebar = () => {
    document.querySelector(".sidebar").classList.add("show");
  };

  const hideSidebar = () => {
    document.querySelector(".sidebar").classList.remove("show");
  };

  return (
    <nav>
      <ul className="sidebar">
        <li onClick={hideSidebar}>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </a>
        </li>
        <li>
          <Link to="/" onClick={hideSidebar}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/materi" onClick={hideSidebar}>
            Materi
          </Link>
        </li>
      </ul>
      <ul>
        <h3>Biefo Verdinal</h3>
        <li className="hideOnMobile">
          <Link to="/">Home</Link>
        </li>
        <li className="hideOnMobile">
          <Link to="/materi">Materi</Link>
        </li>
        <li className="menu-button" onClick={showSidebar}>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26"
              viewBox="0 -960 960 960"
              width="26"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
