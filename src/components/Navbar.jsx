import { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar navbar-expand-sm navbar-lewagon">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {/* logo optional */}
          {/* <img src="/logo.png" alt="Logo" /> */}
        </a>

        <button
          className="navbar-toggler"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        <div className={`navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav me-auto">
            <li>
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}
