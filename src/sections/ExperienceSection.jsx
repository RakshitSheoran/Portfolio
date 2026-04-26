import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import "./ExperienceSection.css";

const EXPERIENCES = [
  {
    year: "2025",
    range: "Jul — Sep 2025",
    role: "Product Support Intern",
    company: "Concentrix India (External Workforce for Google)",
    location: "Gurugram",
    bullets: [
      "Identified and resolved frontend UI bugs, improving code quality & application stability for Google India.",
      "Debugged REST API integrations between frontend and Node.js services, ensuring smooth data flow.",
      "Leveraged GitHub Copilot, Claude Code & ChatGPT to streamline debugging & accelerate issue resolution.",
      "Participated in code reviews & debugging to improve maintainability, increasing stability by 40%.",
    ],
  },
  {
    year: "2025",
    range: "Jan — Jul 2025",
    role: "Software Developer Intern",
    company: "Gigmo Solutions Pvt. Ltd.",
    location: "Gurugram",
    bullets: [
      "Developed XQA Dashboard for real-time KPI tracking of employees using React.js & JavaScript.",
      "Built dynamic UI components — charts and performance metrics - using real-time data from REST APIs.",
      "Built backend using Node.js, Express, and MongoDB, designing REST APIs and data models to support dashboard functionality.",
      "Improved UI performance by 40% by optimising components with lazy loading, useMemo & useCallback.",
    ],
  },
  {
    year: "2024",
    range: "Mar — Sep 2024",
    role: "Frontend Developer Intern",
    company: "My Tech Consult Pvt. Ltd.",
    location: "Gurugram",
    bullets: [
      "Built a scalable React.js-based SaaS survey platform with dynamic template creation, drag-and-drop custom fields, and full CRUD via REST APIs.",
      "Developed 20+ reusable React components (custom inputs / ratings), reducing manual UI work by 80%.",
      "Implemented real-time preview and state-driven UI updates to enhance user experience and usability.",
      "Collaborated with backend teams to integrate REST APIs, understanding request/response flows & data handling.",
    ],
  },
];

/* Dot activates when the scroll line actually reaches its vertical position */
const TimelineItem = ({ item, timelineRef, smoothProgress }) => {
  const dotRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (!dotRef.current || !timelineRef.current) return;
    const timelineEl = timelineRef.current;
    /* Absolute document positions — scroll-independent */
    const timelineAbsTop =
      timelineEl.getBoundingClientRect().top + window.scrollY;
    const dotAbsTop =
      dotRef.current.getBoundingClientRect().top + window.scrollY;
    const fraction = (dotAbsTop - timelineAbsTop) / timelineEl.offsetHeight;
    setIsActive(latest >= fraction - 0.02);
  });

  return (
    <div className="exp-item">
      <div className="exp-item__side">
        <motion.div
          className="exp-item__year"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          {item.year}
        </motion.div>
        <motion.div
          className="exp-item__range"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          {item.range}
        </motion.div>
      </div>

      <div className="exp-item__dot-col">
        <div
          ref={dotRef}
          className={`exp-dot ${isActive ? "is-active" : ""}`}
        />
      </div>

      <motion.div
        className="exp-item__content"
        initial={{ opacity: 0, x: 28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.55, delay: 0.1 }}
      >
        <div className="exp-card">
          <h3 className="exp-card__role">{item.role}</h3>
          <div className="exp-card__meta">
            <span className="exp-card__company">{item.company}</span>
            <span className="exp-card__loc">· {item.location}</span>
          </div>
          <ul className="exp-card__bullets">
            {item.bullets.map((b, j) => (
              <li key={j}>{b}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

const ExperienceSection = () => {
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 20%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section className="exp-section">
      <motion.div
        className="exp-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <div className="exp-badge">
          <span className="exp-badge-dot" />
          Experience
        </div>
        <h2 className="exp-heading">
          Changelog of <em>my journey</em>
        </h2>
        <p className="exp-subtitle">
          A timeline of roles, teams, and the things I shipped along the way.
        </p>
      </motion.div>

      <div className="exp-timeline" ref={timelineRef}>
        <div className="exp-line-track">
          <motion.div
            className="exp-line-fill"
            style={{ scaleY: smoothProgress, transformOrigin: "top" }}
          />
        </div>

        {EXPERIENCES.map((item, i) => (
          <TimelineItem
            key={i}
            item={item}
            timelineRef={timelineRef}
            smoothProgress={smoothProgress}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
