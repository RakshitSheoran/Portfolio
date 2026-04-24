import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaDownload,
  FaMapMarkerAlt,
  FaBriefcase,
  FaClock,
  FaGraduationCap,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaPhoneSquare,
  FaArrowRight,
} from "react-icons/fa";
import { HiSparkles, HiLightningBolt } from "react-icons/hi";
import { BsStars } from "react-icons/bs";

import RakshitSheoranPic from "../assets/RakshitSheoranPic.jpeg";
import ResumeFile from "../assets/Rakshit__Sheoran__Resume.pdf";
import FinArcImg1 from "../assets/FinArc1.png";
import FinArcImg2 from "../assets/FinArc2.png";
import FinArcImg3 from "../assets/FinArc3.png";
import WorldAtlasImg1 from "../assets/WorldAtlas1.png";
import WorldAtlasImg2 from "../assets/WorldAtlas2.png";
import WorldAtlasImg3 from "../assets/WorldAtlas3.png";
import WorldAtlasImg4 from "../assets/WorldAtlas4.png";

import "./BentoSection.css";

const ROLES = [
  "Frontend Developer",
  "React Specialist",
  "Footballer",
  "Creative Coder",
  "Tech Enthusiast",
  "Nature Lover",
];

const PREVIEW_IMGS = [
  FinArcImg1,
  FinArcImg2,
  FinArcImg3,
  WorldAtlasImg1,
  WorldAtlasImg2,
  WorldAtlasImg3,
  WorldAtlasImg4,
];

/* Update with your actual number */
const PHONE_NUMBER = "89501-14027";

/* ── Reusable glass card with cursor-tracking glow ── */
const BentoCard = ({ children, className = "" }) => {
  const ref = useRef(null);

  const onMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--gx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--gy", `${((e.clientY - r.top) / r.height) * 100}%`);
    el.style.setProperty("--gi", "1");
  }, []);

  const onLeave = useCallback(() => {
    ref.current?.style.setProperty("--gi", "0");
  }, []);

  return (
    <div
      ref={ref}
      className={`bento-card ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
      <div className="bento-card__glow" />
      <div className="bento-card__border" />
    </div>
  );
};

/* ── Card 1: Profile / Hero (compact, 1 row) ── */
const HeroCard = () => {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setRoleIdx((i) => (i + 1) % ROLES.length),
      2800,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <BentoCard className="bento-hero">
      <div className="bento-hero__inner">
        {/* Photo + status pill */}
        <div className="bento-hero__photo-col">
          <img
            src={RakshitSheoranPic}
            alt="Rakshit Sheoran"
            className="bento-hero__photo"
          />
          <div className="bento-hero__status-pill">
            <span className="bento-status-dot" />
            Available for work
          </div>
        </div>

        {/* Info */}
        <div className="bento-hero__info">
          <p className="bento-hero__handle">@rakshitsheoran</p>
          <h2 className="bento-hero__name">Rakshit Sheoran</h2>

          <div className="bento-hero__role-line">
            <span className="bento-hero__role-prefix">I&apos;m a{"   "} </span>
            <div className="bento-hero__role-wrap">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIdx}
                  className="bento-hero__role"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                >
                  {ROLES[roleIdx]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* 2×2 facts grid */}
          <div className="bento-hero__facts">
            <div className="bento-fact">
              <FaMapMarkerAlt className="bento-fact__icon" />
              <span>Gurugram</span>
            </div>
            <div className="bento-fact">
              <FaBriefcase className="bento-fact__icon" />
              <span>Frontend Developer</span>
            </div>
            <div className="bento-fact">
              <FaClock className="bento-fact__icon" />
              <span>IST (UTC+5:30)</span>
            </div>
            <div className="bento-fact">
              <FaGraduationCap className="bento-fact__icon" />
              <span>B.Tech Graduate</span>
            </div>
          </div>
        </div>
      </div>
    </BentoCard>
  );
};

/* ── Card 2: Resume Download ── */
const ResumeCard = () => (
  <BentoCard className="bento-resume">
    <div className="bento-resume__inner">
      <div className="bento-resume__icon-wrap">
        <FaDownload className="bento-resume__icon" />
      </div>
      <h3 className="bento-resume__title">Resume</h3>
      <p className="bento-resume__updated">Last updated: April 2026</p>
      <a
        href={ResumeFile}
        download="Rakshit_Sheoran_Resume.pdf"
        className="bento-btn bento-btn--cta"
      >
        <FaDownload size={15} /> Download
      </a>
    </div>
  </BentoCard>
);

/* ── Card 3: What Makes Me Different ── */
const DifferentCard = () => (
  <BentoCard className="bento-diff">
    <div className="bento-card__label">
      <BsStars /> What makes me different
    </div>
    <ul className="bento-diff__list">
      <li>
        <HiSparkles className="bento-diff__ico" />
        <div>
          <strong>Wow Factor in UI</strong>
          <span>Interfaces that genuinely surprise and delight</span>
        </div>
      </li>
      <li>
        <HiLightningBolt className="bento-diff__ico" />
        <div>
          <strong>Optimised UX</strong>
          <span>Every interaction intentional & frictionless</span>
        </div>
      </li>
      <li>
        <span className="bento-diff__ico bento-diff__ico--code">{"</>"}</span>
        <div>
          <strong>Clean, Scalable Code</strong>
          <span>Readable, maintainable, production-ready</span>
        </div>
      </li>
    </ul>
  </BentoCard>
);

/* ── Card 4: Quote ── */
const QuoteCard = () => (
  <BentoCard className="bento-quote">
    <div className="bento-quote__inner">
      <span className="bento-quote__mark">&ldquo;</span>
      <div className="bento-quote__body">
        <p className="bento-quote__text">
          The Magic you&apos;re looking for is in the work you are avoiding.
        </p>
        <p className="bento-quote__caption">— The thought I live by</p>
      </div>
    </div>
  </BentoCard>
);

/* ── Card 5: Education ── */
const EducationCard = () => (
  <BentoCard className="bento-edu">
    <div className="bento-card__label">
      <FaGraduationCap /> Education
    </div>
    <div className="bento-edu__inner">
      <div className="bento-edu__badge">B.Tech</div>
      <div className="bento-edu__details">
        <p className="bento-edu__degree">AI &amp; Machine Learning</p>
        <div className="bento-edu__meta">
          <span className="bento-edu__years">2021 — 2025</span>
          <span className="bento-edu__cgpa">8.55 CGPA</span>
        </div>
        <div className="bento-edu__uni">
          Guru Gobind Singh Indraprastha University,{" "}
          <div className="location-container">
            <FaMapMarkerAlt className="bento-edu__loc" />
            New Delhi
          </div>
        </div>
      </div>
    </div>
  </BentoCard>
);

/* ── Card 6: Fun Facts ── */
const FunFactsCard = () => (
  <BentoCard className="bento-fun">
    <div className="bento-card__label">My Favs</div>
    <div className="bento-fun__items">
      <div className="bento-fun__item">
        <span className="bento-fun__emoji">🎬</span>
        <div>
          <strong>Favourite Movie</strong>
          <span>The Hangover Series</span>
        </div>
      </div>
      <div className="bento-fun__item">
        <span className="bento-fun__emoji">🎷</span>
        <div>
          <strong>Favourite Music</strong>
          <span>Jazz</span>
        </div>
      </div>
      <div className="bento-fun__item">
        <span className="bento-fun__emoji">📚</span>
        <div>
          <strong>Favourite Book</strong>
          <span>The Secret</span>
        </div>
      </div>
    </div>
  </BentoCard>
);

/* ── Card 7: Projects Preview (auto-loop) ── */
const ProjectsCard = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIdx((i) => (i + 1) % PREVIEW_IMGS.length),
      2200,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <BentoCard className="bento-projects">
      <div className="bento-projects__inner">
        <div className="bento-projects__preview">
          <AnimatePresence mode="wait">
            <motion.img
              key={idx}
              src={PREVIEW_IMGS[idx]}
              alt="project preview"
              className="bento-projects__img"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55 }}
            />
          </AnimatePresence>
          <div className="bento-projects__overlay" />
        </div>
        <div className="bento-projects__info">
          <div className="bento-card__label">Featured Work</div>
          <h3 className="bento-projects__title">2 Projects Built</h3>
          <p className="bento-projects__sub">FinArc · World Atlas</p>
          <a href="#projects" className="bento-btn bento-btn--outline">
            View All <FaArrowRight size={10} />
          </a>
        </div>
      </div>
    </BentoCard>
  );
};

/* ── Card 8: Social Links ── */
const SocialCard = () => (
  <BentoCard className="bento-social">
    <div className="bento-card__label">Find me on</div>
    <div className="bento-social__links">
      <a
        href="https://www.linkedin.com/in/rakshit-sheoran-frontend-developer"
        target="_blank"
        rel="noreferrer"
        className="bento-social__link bento-social__link--li"
      >
        <FaLinkedin />
        <span>LinkedIn</span>
      </a>
      <a
        href="https://github.com/RakshitSheoran"
        target="_blank"
        rel="noreferrer"
        className="bento-social__link bento-social__link--gh"
      >
        <FaGithub />
        <span>GitHub</span>
      </a>
      <a
        href="https://www.instagram.com/rakshit_sheoran/"
        target="_blank"
        rel="noreferrer"
        className="bento-social__link bento-social__link--ig"
      >
        <FaInstagram />
        <span>Instagram</span>
      </a>
    </div>
  </BentoCard>
);

/* ── Card 9: Work Together ── */
const WorkTogetherCard = () => {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <BentoCard className="bento-work">
      <div className="bento-work__inner">
        <div className="bento-work__top">
          <BsStars className="bento-work__star" />
          <h3 className="bento-work__heading">Let&apos;s Work Together</h3>
          <p className="bento-work__sub">
            Have a project in mind? Feel free to reach out — I&apos;d love to
            hear about it.
          </p>
        </div>

        <div className="bento-work__btns">
          <a
            href="mailto:rakshitsheoran8@gmail.com"
            className="bento-btn bento-btn--cta"
          >
            <FaEnvelope size={12} /> Email Me
          </a>

          <button
            className={`bento-btn bento-btn--outline bento-btn--phone ${showPhone ? "is-revealed" : ""}`}
            onClick={() => setShowPhone((s) => !s)}
          >
            <FaPhone className="phone-logo" size={11} />
            <AnimatePresence mode="wait">
              <motion.span
                key={showPhone ? "num" : "label"}
                initial={{ opacity: 0, x: 6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -6 }}
                transition={{ duration: 0.18 }}
              >
                {showPhone ? PHONE_NUMBER : "Call Me"}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>
    </BentoCard>
  );
};

/* ── Main Section ── */
const BentoSection = () => (
  <section className="bento-section">
    <motion.div
      className="bento-header"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <div className="bento-badge">
        <span className="bento-badge-dot" />
        More about me
      </div>
      <h2 className="bento-heading">
        About <em>Me</em>
      </h2>
      <p className="bento-subtitle">
        Not just a developer but a creative thinker who brings something new to
        the Table everytime.
      </p>
    </motion.div>

    <motion.div
      className="bento-grid"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.08 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <HeroCard />
      <ResumeCard />
      <DifferentCard />
      <EducationCard />
      <FunFactsCard />
      <QuoteCard />
      <ProjectsCard />
      <SocialCard />
      <WorkTogetherCard />
    </motion.div>
  </section>
);

export default BentoSection;
