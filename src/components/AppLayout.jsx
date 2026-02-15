import LiquidEther from "./LiquidEther";
import "./AppLayout.css";
import Navbar from "./NavBar";
import AboutSection from "../sections/AboutSection";
import SkillsSections from "../sections/SkillsSection";

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
        {/* Hero Section with AboutSection */}
        <section className="section hero-section">
          <AboutSection />
        </section>
        <section className="section" id="skills">
          <SkillsSections></SkillsSections>
        </section>
        {/* Additional Sections */}
        <section className="section" id="projects"></section>

        <section className="section" id="contact">
          <h2>Contact Section</h2>
          {/* Your contact content */}
        </section>
      </div>
    </>
  );
}
