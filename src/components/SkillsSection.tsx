import python from "../assets/Images/python.png";
import java from "../assets/Images/java.png";
import react from "../assets/Images/react.png";
import typescript from "../assets/Images/typescript.png";
import javascript from "../assets/Images/javascript.png";
import bootstrap from "../assets/Images/bootstrap.png";
import css from "../assets/Images/css-3.png";
import cplus from "../assets/Images/c-.png";
import HTML from "../assets/Images/HTML.png";
import github from "../assets/Images/github.png";
import SQL from "../assets/Images/database-storage.png";
import circleci from "../assets/Images/circleci.png";

import YourImage from "../assets/Images/computer.png"; // Replace 'your-image.jpg' with your image file path

function SkillSection() {
  const icons = [
    { src: python, label: 'Python' },
    { src: java, label: 'Java' },
    { src: cplus, label: 'c++'},
    { src: css, label: 'css'},
    { src: HTML, label: 'HTML'},
    { src: react, label: 'react' },
    { src: typescript, label: 'typescript'},
    { src: javascript, label: 'javascript'},
    { src: bootstrap, label: 'bootstrap'},
    { src: github, label: 'github'},
    { src: SQL, label: 'SQL'},
    { src: circleci, label: 'circle CI'},

    // Add more icons as needed
  ];

  return (
    <div className="skills-section">
      {/* Centered Heading */}
      <h1 className="skills-heading">{'< My Tech Stack >'}</h1>

      {/* Parent container for Icons Section and Image Container */}
      <div className="content-container">

        {/* Image Section */}
        <div className="image-container">
          <img src={YourImage} alt="Your Image" />
          <p className="developer-tagline">I'm a programmer who crafts solutions by tapping away at the keyboard. But I'm not just stopping there. I'm a dedicated code enthusiast, always learning and evolving. Right now, I'm diving deep into Java, driven by my hunger for knowledge and my goal to truly master this craft.</p>
        </div>

        {/* Icons Section */}
        <div className="icons-section">
          <div className="icons-grid">
            {icons.map((icon, index) => (
              <div key={index} className="icon">
                <img src={icon.src} alt={icon.label} />
                <p>{icon.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
