import { useState } from "react";
import { motion } from "framer-motion";
import "./TestimonialsSection.css";

const TESTIMONIALS = [
  {
    name: "Aviraj Battan",
    title: "Software Developer",
    company: "Gigmo Solutions",
    text: "Rakshit is one of the most focused developers I've worked with. At Gigmo, he built out the XQA Dashboard from scratch, writing clean code, sharp eye for detail, and always going the extra mile to get the UI pixel-perfect.",
  },
  {
    name: "Jai Sehgal",
    title: "Senior Frontend Developer",
    company: "Gigmo Solutions",
    text: "Working alongside Rakshit on the KPI dashboard was a great experience. He translated complex Figma designs into responsive, polished UIs faster than anyone I'd seen and the performance improvements he shipped were a real game changer.",
  },
  {
    name: "Karan Yadav",
    title: "Frontend Developer",
    company: "Uplers",
    text: "Rakshit and I collaborated on Build Mart, an e-commerce platform, and the experience completely changed how I think about frontend teamwork. He owned complex parts of the UI like cart flows, filtering, checkout and delivered them with pixel-perfect precision. Solid engineer, even better teammate.",
  },
  {
    name: "Loveneesh Bhatnagar",
    title: "Backend Developer",
    company: "Impetus",
    text: "I worked with Rakshit at Gigmos and it was honestly one of the smoothest collaborations I've had. His frontend work integrates beautifully with APIs clean component structure, sensible state management, and thoughtful error handling on every edge case. A rare mix of technical depth and genuine ownership.",
  },
  {
    name: "Shobhit Gaur",
    title: "Software Engineer",
    company: "My Tech Consult Pvt. Ltd.",
    text: "The survey platform Rakshit built at My Tech Consult was genuinely impressive — drag-and-drop fields, real-time preview, 20+ reusable components. He handled every piece with precision. A pleasure to share a codebase with.",
  },
  {
    name: "Uday Gupta",
    title: "Team Lead",
    company: "Concentrix India",
    text: "Rakshit integrated seamlessly into our team from day one. His ability to identify and resolve frontend bugs quickly saved us significant time. He's one of those developers who just gets things done — efficiently and without drama.",
  },
  {
    name: "Alok",
    title: "Backend Developer",
    company: "Gigmo Solutions",
    text: "Rakshit has a great sense of how things should look and feel. At Gigmo, he consistently delivered components that were not just functional but genuinely polished. A solid team player who raises the bar for everyone around him.",
  },
  {
    name: "Bhupinder Singh",
    title: "Founder",
    company: "InCred Group",
    text: "I hired Rakshit for a developing a Fintech Dashboard and was blown away. He understood the brief quickly, asked exactly the right questions, and delivered a clean, responsive product well ahead of schedule. Genuinely impressive work.",
  },
  {
    name: "Akash Yadav",
    title: "Backend Developer",
    company: "Collaborator",
    text: "Rakshit has a solid understanding of how frontend and backend fit together. Working with him on API integration was seamless — he asked all the right questions about data flows and picked up response structures instantly. Great collaborator.",
  },
];

const ROW_1 = TESTIMONIALS.slice(0, 5);
const ROW_2 = TESTIMONIALS.slice(5);

const TestimonialCard = ({ item }) => (
  <div className="tmcard">
    <p className="tmcard__text">&ldquo;{item.text}&rdquo;</p>
    <div className="tmcard__footer">
      <div className="tmcard__avatar">{item.name.charAt(0)}</div>
      <div>
        <p className="tmcard__name">{item.name}</p>
        <p className="tmcard__role">
          {item.title} · {item.company}
        </p>
      </div>
    </div>
  </div>
);

const MarqueeRow = ({ items, reverse = false, paused }) => {
  const doubled = [...items, ...items];
  return (
    <div className={`tm-row-wrapper ${paused ? "is-paused" : ""}`}>
      <div className={`tm-track ${reverse ? "tm-track--reverse" : ""}`}>
        {doubled.map((item, i) => (
          <TestimonialCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section className="tm-section">
      <motion.div
        className="tm-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <div className="tm-badge">
          <span className="tm-badge-dot" />
          Testimonials
        </div>
        <h2 className="tm-heading">
          Word on the <em>street</em>
        </h2>
        <p className="tm-subtitle">
          A handful of generous words from the people I&apos;ve had the chance
          to collaborate or work with.
        </p>
      </motion.div>

      {/* Marquee rows — click anywhere to pause/resume on mobile */}
      <div
        className="tm-marquee-area"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onClick={() => setPaused((p) => !p)}
      >
        <MarqueeRow items={ROW_1} paused={paused} />
        <MarqueeRow items={ROW_2} reverse paused={paused} />
      </div>
    </section>
  );
};

export default TestimonialsSection;
