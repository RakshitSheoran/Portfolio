import { FaLinkedinIn, FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";
import "./FooterSection.css";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  {
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rakshit-sheoran-frontend-developer",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    href: "https://github.com/RakshitSheoran",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    href: "mailto:rakshitsheoran8@gmail.com",
  },
];

const scrollTo = (href) => {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function FooterSection() {
  return (
    <footer className="footer">
      <div className="footer-glass">
        {/* Top */}
        <div className="footer-top">
          <span className="footer-logo">RS</span>
          <p className="footer-tagline">
            Building fast, beautiful web products — one pixel at a time.
          </p>
        </div>

        {/* Nav */}
        <nav className="footer-nav">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              className="footer-nav-link"
              onClick={() => scrollTo(link.href)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Rakshit Sheoran. All rights reserved.
          </p>
          <div className="footer-socials">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="footer-social-btn"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
