import { motion } from "framer-motion";
import "./SkillsSection.css";

const SkillsSection = () => {
  const skills = [
    // Row 1
    [
      { name: "ReactJS", icon: "⚛️", color: "#61DAFB" },
      { name: "NextJS", icon: "▲", color: "#000000" },
      { name: "TypeScript", icon: "TS", color: "#3178C6" },
      { name: "Tailwind CSS", icon: "🌊", color: "#06B6D4" },
      { name: "Motion", icon: "M", color: "#FF0080" },
      { name: "Sanity", icon: "S", color: "#F03E2F" },
    ],
    // Row 2
    [
      { name: "Contentful", icon: "C", color: "#2478CC" },
      { name: "NodeJS", icon: "⬢", color: "#339933" },
      { name: "ExpressJS", icon: "EX", color: "#000000" },
      { name: "PostgreSQL", icon: "🐘", color: "#4169E1" },
      { name: "MongoDB", icon: "🍃", color: "#47A248" },
      { name: "Prisma", icon: "▲", color: "#2D3748" },
    ],
    // Row 3
    [
      { name: "Zustand", icon: "🐻", color: "#443E38" },
      { name: "Zod", icon: "Z", color: "#3E67B1" },
      { name: "pnpm", icon: "📦", color: "#F69220" },
      { name: "Bun", icon: "🍞", color: "#FBF0DF" },
      { name: "Git", icon: "◆", color: "#F05032" },
      { name: "GitHub", icon: "", color: "#181717" },
      { name: "Vercel", icon: "▲", color: "#000000" },
    ],
    // Row 4
    [
      { name: "AWS", icon: "☁️", color: "#FF9900" },
      { name: "Docker", icon: "🐳", color: "#2496ED" },
      { name: "Expo", icon: "△", color: "#000020" },
      { name: "Clerk", icon: "C", color: "#6C47FF" },
      { name: "Linux", icon: "🐧", color: "#FCC624" },
    ],
  ];

  return (
    <div className="skills-container">
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
    </div>
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
