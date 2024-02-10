import python from "../assets/Images/python.png";
import java from "../assets/Images/java.png";
import react from "../assets/Images/react.png";
import typescript from "../assets/Images/typescript.png";
import kubernetes from "../assets/Images/kubernetes.png";
import PHP from "../assets/Images/PHP.png";
import AWS from "../assets/Images/aws.png";
import cplus from "../assets/Images/c-.png";
import github from "../assets/Images/github.png";
import SQL from "../assets/Images/database-storage.png";
import circleci from "../assets/Images/circleci.png";
import angular from "../assets/Images/angular.png"; 
import springboot from "../assets/Images/springboot.png";
import docker from "../assets/Images/docker.png";
import shaper3d from "../assets/Images/shaper3d.jpeg";
import net from "../assets/Images/net.png";

import wind from "../assets/Images/window.png";
import YourImage from "../assets/Images/computer.png"; // Replace 'your-image.jpg' with your image file path
function SkillSection() {
  const icons = [
    { src: react, label: 'React.js' },
    { src: typescript, label: 'TypeScript' },
    { src: angular, label: 'Angular' },
    { src: springboot, label: 'SpringBoot' },

    { src: cplus, label: 'c++'},
    { src: python, label: 'Python'},
    { src: java, label: 'Java' },
    { src: net, label: '.net'},

    { src: PHP, label: 'PHP'},
    { src: SQL, label: 'SQL'},
    { src: shaper3d, label: 'Shaper3D' },
    { src: AWS, label: 'AWS'},

    { src: docker, label: 'Docker'},
    { src: kubernetes, label: 'kubernetes'},
    { src: github, label: 'github'},
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
        <img src={wind} alt="window" className="window" />
        <img src={YourImage} alt="Your Image" className="computer" />
          <p className="developer-tagline">
            As a <span className="highlighted">Master's student</span> in Computer Science at Saint Louis University, I'm on the hunt for an <span className="highlighted">internship or job</span> where I can trade my ramen for <span className="highlighted">repositories</span> and transform <span className="highlighted">classroom daydreams</span> into <span className="highlighted">real-life code</span>. Looking for a team that appreciates a <span className="highlighted">good laugh</span>, a <span className="highlighted">great algorithm</span>, and the magic of turning 'one more bug fix' into '<span className="highlighted">feature complete</span>'.
          </p>
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
