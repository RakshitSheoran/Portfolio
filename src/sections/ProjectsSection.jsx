import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaChevronLeft,
  FaChevronRight,
  FaServer,
  FaCss3Alt,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiSass } from "react-icons/si";
import { TbChartBar, TbAtom2, TbRoute } from "react-icons/tb";

import FinArcImg1 from "../assets/FinArc1.png";
import FinArcImg2 from "../assets/FinArc2.png";
import FinArcImg3 from "../assets/FinArc3.png";
import WorldAtlasImg1 from "../assets/WorldAtlas1.png";
import WorldAtlasImg2 from "../assets/WorldAtlas2.png";
import WorldAtlasImg3 from "../assets/WorldAtlas3.png";
import WorldAtlasImg4 from "../assets/WorldAtlas4.png";

import "./ProjectsSection.css";

const projects = [
  {
    id: "finarc",
    label: "FinArc",
    category: "PERSONAL FINANCE · 2025",
    title: "FinArc",
    description:
      "A personal finance dashboard with smart insights — track balances, spending and income, visualise trends, and get AI-assisted recommendations at a glance.",
    features: [
      "Real-time balance, savings & expense widgets",
      "Analytics chart for income vs. expenses",
      "Spending breakdown with category donut",
      "Monthly goal tracker with progress states",
    ],
    techStack: [
      { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#264DE4" },
      { name: "Recharts", icon: <TbChartBar />, color: "#22c55e" },
      { name: "Zustand", icon: <TbAtom2 />, color: "#FF6B6B" },
    ],
    images: [FinArcImg1, FinArcImg2, FinArcImg3],
    liveUrl: "https://finarc.netlify.app/",
    sourceUrl: "https://github.com/RakshitSheoran/FinArc",
  },
  {
    id: "worldatlas",
    label: "World Atlas",
    category: "WEB APPLICATION · 2026",
    title: "World Atlas",
    description:
      "An interactive world atlas app — explore countries, regions and key stats with a clean interface and instant search.",
    features: [
      "Interactive country search & filtering",
      "Population, area & capital city data",
      "Filter by region or sub-region",
      "Dark mode with smooth transitions",
    ],
    techStack: [
      { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#264DE4" },
      { name: "SCSS", icon: <SiSass />, color: "#CC6699" },
      { name: "React Router", icon: <TbRoute />, color: "#CA4245" },
      { name: "REST APIs", icon: <FaServer />, color: "#a855f7" },
    ],
    images: [WorldAtlasImg1, WorldAtlasImg2, WorldAtlasImg3, WorldAtlasImg4],
    liveUrl: "https://projectworldatlas.netlify.app/",
    sourceUrl: "https://github.com/RakshitSheoran/WorldAtals",
  },
];

/* ── Device Mockup (ContainerScroll-style frame + carousel) ── */
const DeviceMockup = ({ images }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [direction, setDirection] = useState(1);

  const goNext = () => {
    setDirection(1);
    setCurrentImg((i) => (i + 1) % images.length);
  };
  const goPrev = () => {
    setDirection(-1);
    setCurrentImg((i) => (i - 1 + images.length) % images.length);
  };

  const variants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  };

  return (
    <div className="device-frame">
      {/* Screen — inner zinc-900 container with image */}
      <div className="device-screen-wrap">
        <div className="device-screen">
          <AnimatePresence custom={direction} mode="wait">
            <motion.img
              key={currentImg}
              src={images[currentImg]}
              alt="project screenshot"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.32, ease: "easeInOut" }}
              className="device-img"
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom chin — arrows + dots (or home indicator) */}
      <div className="device-bottom">
        {images.length > 1 ? (
          <>
            <button
              className="chin-arrow"
              onClick={goPrev}
              aria-label="Previous"
            >
              <FaChevronLeft />
            </button>

            <div className="device-dots">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`device-dot ${i === currentImg ? "active" : ""}`}
                  onClick={() => {
                    setDirection(i > currentImg ? 1 : -1);
                    setCurrentImg(i);
                  }}
                  aria-label={`Screenshot ${i + 1}`}
                />
              ))}
            </div>

            <button className="chin-arrow" onClick={goNext} aria-label="Next">
              <FaChevronRight />
            </button>
          </>
        ) : (
          <div className="device-home-indicator" />
        )}
      </div>
    </div>
  );
};

/* ── Project Info Card (navbar glass styling) ── */
const ProjectInfoCard = ({ project }) => {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--glow-x", `${x}%`);
    card.style.setProperty("--glow-y", `${y}%`);
    card.style.setProperty("--glow-intensity", "1");
  }, []);

  const handleMouseLeave = useCallback(() => {
    cardRef.current?.style.setProperty("--glow-intensity", "0");
  }, []);

  return (
    <div
      ref={cardRef}
      className="project-info-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-category">{project.category}</div>
      <h3 className="project-card-title">{project.title}</h3>
      <p className="project-card-desc">{project.description}</p>

      <div className="project-features">
        <span className="project-section-label">KEY FEATURES</span>
        <ul className="project-features-list">
          {project.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>

      <div className="project-tech">
        <span className="project-section-label">TECH STACK</span>
        <div className="project-tech-pills">
          {project.techStack.map((tech, i) => (
            <span key={i} className="tech-pill">
              <span className="tech-pill-icon" style={{ color: tech.color }}>
                {tech.icon}
              </span>
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      <div className="project-links">
        <a
          href={project.liveUrl}
          className="proj-btn proj-btn--primary"
          target="_blank"
          rel="noreferrer"
        >
          View Project
        </a>
        <a
          href={project.sourceUrl}
          className="proj-btn proj-btn--secondary"
          target="_blank"
          rel="noreferrer"
        >
          Source
        </a>
      </div>

      {/* Border glow overlay */}
      <div className="card-glow-border" />
    </div>
  );
};

/* ── Main Section ── */
const ProjectsSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = projects[activeIdx];

  return (
    <section className="projects-section">
      {/* Header */}
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <div className="projects-badge">
          <span className="projects-badge-dot" />
          SELECTED WORK
        </div>
        <h2 className="projects-heading">
          Recent <em>projects</em>
        </h2>
        <p className="projects-subtitle">
          A couple of the things I&apos;ve been building lately - thoughtfully
          designed, carefully built.
        </p>
      </motion.div>

      {/* Project Switcher Pills */}
      <motion.div
        className="projects-pills"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        {projects.map((p, i) => (
          <motion.button
            key={p.id}
            className={`projects-pill ${i === activeIdx ? "active" : ""}`}
            onClick={() => setActiveIdx(i)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            {p.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Project Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          className="project-row"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.38 }}
        >
          {/* iPad Side — with ContainerScroll-style tilt on enter */}
          <div className="project-device-side">
            <div className="device-perspective">
              <motion.div
                initial={{ rotateX: 20 }}
                animate={{ rotateX: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <DeviceMockup images={active.images} />
              </motion.div>
            </div>
          </div>

          {/* Info Card Side */}
          <div className="project-info-side">
            <ProjectInfoCard project={active} />
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
