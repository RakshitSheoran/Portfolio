import BlurText from "../components/BlurText";
import ProfileCard from "../components/ProfileCard";
import Photo from "../assets/Photo.png";
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <>
      <div className="card-text-container">
        <ProfileCard
          name="Rakshit Sheoran"
          title="FrontEnd Developer"
          handle="rakshitsheoran"
          status="Online"
          contactText="Contact Me"
          avatarUrl={Photo}
          showUserInfo
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log("Contact clicked")}
          showIcon
          showBehindGlow={false}
          behindGlowColor="hsla(236, 100%, 70%, 0.6)"
          customInnerGradient="linear-gradient(145deg,hsla(236, 40%, 45%, 0.55) 0%,hsla(212, 60%, 70%, 0.27) 100%)"
        />

        <BlurText
          text="I build fast, intelligent web products that deliver real impact."
          lastWordsCount={2} // Style the last 2 words
          lastWordsFont="'Times New Roman', serif" // Different font
          lastWordsClass="last-words" // Optional: add custom class
        />
      </div>
    </>
  );
}
