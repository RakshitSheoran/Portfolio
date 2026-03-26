import { useState } from "react";
import "./NavBar.css";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    // For now, just console log. Later we'll add scroll functionality
    console.log(`Navigating to ${sectionId}`);
  };

  return (
    <nav className="glass-navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <span className="logo-text">RS</span>
        </div>

        {/* Navigation Links */}
        <ul className="navbar-menu">
          <li>
            <button
              className={`nav-link ${activeSection === "home" ? "active" : ""}`}
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${activeSection === "about" ? "active" : ""}`}
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${activeSection === "skills" ? "active" : ""}`}
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="navbar-cta">
          <button className="cta-button">
            <span>Hire Me</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
