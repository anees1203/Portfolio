import React from "react";
import profileImage from "../assets/Images/profileImage.png";
import InteractiveSphere from "./InteractiveSphere";
import my from "../assets/Images/my.jpg";
import resumeIcon from "../assets/Images/resume.png";
import linkedInIcon from "../assets/Images/linkedin.png";
import gitHubIcon from "../assets/Images/github.png";

function HomeSection() {
  const introText = "Hi There! I'm \n";
  const nameText = "Anees Shaik\n";
  const specialText =
    "A passionate Developer 🚀 \nCrafting Digital Universes, One Line of Code at a Time.";

  return (
    <div className="home-section">
      <div className="interactive-sphere-container">
        <InteractiveSphere color="#00fffc" numberOfNodes={800} />
      </div>
      <div className="content-wrapper">
        <img src={my} alt="Profile" className="profile-im" />
        <div className="text-and-icons-container">
          <div className="text-wrapper">
            <pre>
              {introText}
              <span className="name-text">{nameText}</span>
              <span className="special-text">{specialText}</span>
            </pre>
          </div>
          <div className="social-links">
            <a
              href="YOUR_RESUME_URL"
              target="_blank"
              rel="noopener noreferrer"
              title="Resume"
            >
              <img src={resumeIcon} alt="Resume" className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/anees-shaik-327267210/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <img src={linkedInIcon} alt="LinkedIn" className="social-icon" />
            </a>
            <a
              href="https://github.com/anees1203"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <img src={gitHubIcon} alt="GitHub" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      <img src={profileImage} alt="Profile" className="profile-image" />
    </div>
  );
}

export default HomeSection;
