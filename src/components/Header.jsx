// import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="bg-dark text-white p-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1>Prateek Dawande</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="about" smooth={true}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="skills" smooth={true}>
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="experience"
                smooth={true}
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="projects" smooth={true}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="education"
                smooth={true}
              >
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="contact" smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
