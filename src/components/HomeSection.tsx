// HomeSection.js
import React, { useEffect, useState } from 'react';
import profileImage from '../assets/Images/profileImage.png';
import InteractiveSphere from './InteractiveSphere';

function HomeSection() {
  const fullText = "Hi There! \n👋🏼 \nI’m\nAnees Shaik\nSoftware Engineer";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 100); // Adjust typing speed as needed
    }
  }, [index, text, fullText]);

  return (
    <div className="home-section">
        <div className="interactive-sphere-container">
            <InteractiveSphere color="#00fffc" numberOfNodes={5000} />
        </div>
        <div className="text-wrapper">
            <pre>{text}</pre>
        </div>
        <img src={profileImage} alt="Anees Shaik" className="profile-image" />
    </div>
  );
}

export default HomeSection;

