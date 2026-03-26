import { motion } from "framer-motion";
import "./SkillsSection.css";

// Import icons from react-icons
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
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
  SiPostman,
  SiEslint,
  SiPrettier,
  SiNpm,
  SiPnpm,
  SiYarn,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { BiLogoFirebase } from "react-icons/bi";

const SkillsSection = () => {
  const skills = [
    // Row 1 - Core Frontend
    [
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      {
        name: "Framer Motion",
        icon: <TbBrandFramerMotion />,
        color: "#FF0080",
      },
    ],
    // Row 2 - Styling & UI Libraries
    [
      { name: "Sass", icon: <SiSass />, color: "#CC6699" },
      {
        name: "Styled Components",
        icon: <SiStyledcomponents />,
        color: "#DB7093",
      },
      { name: "Material UI", icon: <SiMui />, color: "#007FFF" },
      { name: "Chakra UI", icon: <SiChakraui />, color: "#319795" },
      { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
      { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
    ],
    // Row 3 - Build Tools & Package Managers
    [
      { name: "Vite", icon: <SiVite />, color: "#646CFF" },
      { name: "Webpack", icon: <SiWebpack />, color: "#8DD6F9" },
      { name: "npm", icon: <SiNpm />, color: "#CB3837" },
      { name: "pnpm", icon: <SiPnpm />, color: "#F69220" },
      { name: "Yarn", icon: <SiYarn />, color: "#2C8EBB" },
      { name: "ESLint", icon: <SiEslint />, color: "#4B32C3" },
    ],
    // Row 4 - Tools & DevOps
    [
      { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { name: "GitHub", icon: <FaGithub />, color: "#FFFFFF" },
      { name: "Vercel", icon: <SiVercel />, color: "#FFFFFF" },
      { name: "Netlify", icon: <SiNetlify />, color: "#00C7B7" },
      { name: "Firebase", icon: <BiLogoFirebase />, color: "#FFCA28" },
      { name: "Prettier", icon: <SiPrettier />, color: "#F7B93E" },
    ],
  ];

  return (
    <section className="skills-section">
      {/* 3D Background Element */}
      <div className="skills-bg-element">
        <div className="blob-3d"></div>
      </div>

      {/* Header */}
      <div className="skills-header">
        <motion.p
          className="skills-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          MY SKILLSET
        </motion.p>
        <motion.h2
          className="skills-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          The Magic <span className="gradient-text">Behind</span>
        </motion.h2>
      </div>

      {/* Skills Grid */}
      <div className="skills-container">
        {skills.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="skills-row"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: rowIndex * 0.1 }}
            viewport={{ once: true }}
          >
            {row.map((skill, index) => (
              <SkillBadge key={index} skill={skill} />
            ))}
          </motion.div>
        ))}
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

      {/* Glow effect on hover */}
      <div
        className="skill-glow"
        style={{
          background: `radial-gradient(circle, ${skill.color}40 0%, transparent 70%)`,
        }}
      ></div>
    </motion.div>
  );
};

export default SkillsSection;
