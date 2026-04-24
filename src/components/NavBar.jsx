import { useState, useEffect } from "react";
import "./NavBar.css";

const NAV_ITEMS = [
  { label: "Home",        id: "home" },
  { label: "About",       id: "about" },
  { label: "Projects",    id: "projects" },
  { label: "Skills",      id: "skills" },
  { label: "Contact",     id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(id);
  };

  /* Highlight active section on scroll */
  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="glass-navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <span className="logo-text">RS</span>
        </div>

        {/* Navigation Links */}
        <ul className="navbar-menu">
          {NAV_ITEMS.map(({ label, id }) => (
            <li key={id}>
              <button
                className={`nav-link ${activeSection === id ? "active" : ""}`}
                onClick={() => scrollToSection(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="navbar-cta">
          <a
            className="cta-button"
            href="mailto:rakshitsheoran8@gmail.com"
            aria-label="Hire Me"
          >
            <span>Hire Me</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
