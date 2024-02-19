import InteractiveSphere from "./InteractiveSphere";
import my from "../assets/Images/my.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import resumePdf from "../assets/Resume/Resume.pdf";

function HomeSection() {
  const iconColor = "#3CCF91";

  const introText = "Hi There!,  I'm \n";
  const nameText = "Anees Shaik.\n";
  const specialText =
    "A passionate Developer  \nTransforming Ideas into Reality with Every Commit. ";

  return (
    <div className="home-section">
      <div className="interactive-sphere-container">
        <InteractiveSphere color="#3CCF91" numberOfNodes={800} />
      </div>
      <div className="content-wrapper">
        <div className="profile-container">
          <img src={my} alt="Profile" className="profile-im" />
        </div>
        {/* <img src={my} alt="Profile" className="profile-im" /> */}
        <div className="text-and-icons-container">
          <div className="text-wrapper">
            <pre>
              <span className="intro-text">{introText}</span>
              <span className="name-text">{nameText}</span>
              <span className="special-text">{specialText}</span>
            </pre>
          </div>
          <div className="social-links">
            <a href={resumePdf} download="AneesShaikResume.pdf" title="Resume">
              <FontAwesomeIcon
                icon={faFileAlt}
                color={iconColor}
                className="social-icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/anees-shaik-327267210/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                color={iconColor}
                className="social-icon"
              />
            </a>
            <a
              href="https://github.com/anees1203"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FontAwesomeIcon
                icon={faGithub}
                color={iconColor}
                className="social-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
