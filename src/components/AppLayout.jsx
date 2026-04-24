import LiquidEther from "./LiquidEther";
import "./AppLayout.css";
import Navbar from "./NavBar";
import AboutSection from "../sections/AboutSection";
import BentoSection from "../sections/BentoSection";
import SkillsSections from "../sections/SkillsSection";
import MultiSection from "../sections/MultiSection";
import ExperienceSection from "../sections/ExperienceSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import FooterSection from "../sections/FooterSection";

export default function AppLayout() {
  return (
    <>
      {/* BACKGROUND - Fixed liquid ether */}
      <div className="liquid-background-container">
        <LiquidEther
          className="liquid-bg"
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={60}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.2}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* FOREGROUND - Scrollable Content */}
      <div className="foreground-container">
        <div className="header-section">
          <Navbar />
        </div>

        <section className="section hero-section" id="home">
          <AboutSection />
        </section>

        <section className="section" id="about">
          <BentoSection />
        </section>

        <section className="section" id="projects">
          <MultiSection />
        </section>

        <section className="section" id="skills">
          <SkillsSections />
        </section>

        <section className="section" id="experience">
          <ExperienceSection />
        </section>

        <section className="section" id="testimonials">
          <TestimonialsSection />
        </section>

        <section className="section" id="contact">
          <FooterSection />
        </section>
      </div>
    </>
  );
}
