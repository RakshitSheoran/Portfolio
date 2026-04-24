import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { IconCloud } from "../components/ui/icon-cloud";
import LogoLoop from "../components/LogoLoop";
import { FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiVite,
  SiWebpack,
  SiSass,
  SiStyledcomponents,
  SiMui,
  SiChakraui,
  SiFigma,
  SiVercel,
  SiNetlify,
  SiEslint,
  SiPrettier,
  SiNpm,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { BiLogoFirebase } from "react-icons/bi";
import "./SkillsSection.css";

const cloudSlugs = [
  "react",
  "typescript",
  "javascript",
  "tailwindcss",
  "framer",
  "sass",
  "redux",
  "figma",
  "vitedotjs",
  "webpack",
  "git",
  "github",
  "vercel",
  "netlify",
  "firebase",
  "prettier",
  "eslint",
  "npm",
];

const cloudImages = cloudSlugs.map(
  (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
);

const logoLoopItems = [
  { node: <FaReact style={{ color: "#61DAFB" }} />, ariaLabel: "React" },
  {
    node: <SiTypescript style={{ color: "#3178C6" }} />,
    ariaLabel: "TypeScript",
  },
  {
    node: <SiJavascript style={{ color: "#F7DF1E" }} />,
    ariaLabel: "JavaScript",
  },
  {
    node: <SiTailwindcss style={{ color: "#06B6D4" }} />,
    ariaLabel: "Tailwind CSS",
  },
  {
    node: <TbBrandFramerMotion style={{ color: "#FF0080" }} />,
    ariaLabel: "Framer Motion",
  },
  { node: <FaGitAlt style={{ color: "#F05032" }} />, ariaLabel: "Git" },
  { node: <FaGithub style={{ color: "#ffffff" }} />, ariaLabel: "GitHub" },
  { node: <SiVercel style={{ color: "#ffffff" }} />, ariaLabel: "Vercel" },
  { node: <SiNetlify style={{ color: "#00C7B7" }} />, ariaLabel: "Netlify" },
  {
    node: <BiLogoFirebase style={{ color: "#FFCA28" }} />,
    ariaLabel: "Firebase",
  },
  { node: <SiPrettier style={{ color: "#F7B93E" }} />, ariaLabel: "Prettier" },
  { node: <SiSass style={{ color: "#CC6699" }} />, ariaLabel: "Sass" },
  {
    node: <SiStyledcomponents style={{ color: "#DB7093" }} />,
    ariaLabel: "Styled Components",
  },
  { node: <SiMui style={{ color: "#007FFF" }} />, ariaLabel: "Material UI" },
  { node: <SiChakraui style={{ color: "#319795" }} />, ariaLabel: "Chakra UI" },
  { node: <SiRedux style={{ color: "#764ABC" }} />, ariaLabel: "Redux" },
  { node: <SiFigma style={{ color: "#F24E1E" }} />, ariaLabel: "Figma" },
  { node: <SiVite style={{ color: "#646CFF" }} />, ariaLabel: "Vite" },
  { node: <SiWebpack style={{ color: "#8DD6F9" }} />, ariaLabel: "Webpack" },
  { node: <SiNpm style={{ color: "#CB3837" }} />, ariaLabel: "npm" },
];

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 10,
    damping: 20,
    restDelta: 0.001,
  });

  const rotate = useTransform(smoothProgress, [0, 0.6], [20, 0]);
  const scale = useTransform(smoothProgress, [0, 0.6], [0.88, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.35], [0, 1]);

  const skills = [
    [
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      {
        name: "Framer Motion",
        icon: <TbBrandFramerMotion />,
        color: "#FF0080",
      },
      { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { name: "GitHub", icon: <FaGithub />, color: "#FFFFFF" },
      { name: "Vercel", icon: <SiVercel />, color: "#FFFFFF" },
      { name: "Netlify", icon: <SiNetlify />, color: "#00C7B7" },
      { name: "Prettier", icon: <SiPrettier />, color: "#F7B93E" },
      { name: "Material UI", icon: <SiMui />, color: "#007FFF" },
      { name: "Chakra UI", icon: <SiChakraui />, color: "#319795" },
      { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
      { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
      { name: "Vite", icon: <SiVite />, color: "#646CFF" },
      { name: "Webpack", icon: <SiWebpack />, color: "#8DD6F9" },
      { name: "npm", icon: <SiNpm />, color: "#CB3837" },
    ],
  ];

  return (
    <section className="skills-section" ref={sectionRef}>
      <div className="skills-bg-element">
        <div className="blob-3d"></div>
      </div>

      {/* Header */}
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <div className="skills-badge">
          <span className="skills-badge-dot" />
          My Skillset
        </div>
        <h2 className="skills-title">
          The <em className="gradient-text">Magic</em> Behind
        </h2>
        <p className="skills-subtitle">
          An ever-growing developer - picking up new tools, frameworks, and
          ideas every single day.
        </p>
      </motion.div>

      {/* Logo Loop — directly below heading */}
      {/* <div className="skills-logoloop-wrapper">
        <LogoLoop
          logos={logoLoopItems}
          speed={50}
          logoHeight={40}
          gap={150}
          pauseOnHover
          fadeOut
          fadeOutColor="#09011a"
          scaleOnHover
          ariaLabel="Skills marquee"
        />
      </div> */}

      {/* Icon Cloud */}
      <div className="skills-cloud-wrapper">
        <IconCloud images={cloudImages} />
      </div>

      {/* Skills Grid — scroll-driven 3D animation */}
      <div
        style={{
          perspective: "1000px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <motion.div
          className="skills-container"
          style={{ rotateX: rotate, scale, opacity }}
        >
          {skills.map((row, rowIndex) => (
            <div key={rowIndex} className="skills-row">
              {row.map((skill, index) => (
                <SkillBadge key={index} skill={skill} />
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const SkillBadge = ({ skill }) => {
  return (
    <motion.div
      className="skill-badge"
      whileHover={{ scale: 1.1, y: -8 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="skill-content">
        <span className="skill-icon" style={{ color: skill.color }}>
          {skill.icon}
        </span>
        <span className="skill-name">{skill.name}</span>
      </div>
      <div
        className="skill-glow"
        style={{
          background: `radial-gradient(circle, ${skill.color}40 0%, transparent 70%)`,
        }}
      />
    </motion.div>
  );
};

export default SkillsSection;
