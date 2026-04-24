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
          onContactClick={() => window.location.href = "tel:+918950114027"}
          showIcon
          showBehindGlow={false}
          behindGlowColor="hsla(236, 100%, 70%, 0.6)"
          customInnerGradient="linear-gradient(145deg,hsla(236, 40%, 45%, 0.55) 0%,hsla(212, 60%, 70%, 0.27) 100%)"
        />

        <BlurText
          text="I build fast, intelligent web products that deliver real impact."
          lastWordsCount={2}
          lastWordsFont="'PlayFair Display', serif"
          lastWordsClass="last-words"
        />
      </div>
    </>
  );
}
