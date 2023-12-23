import React, { useEffect, useState } from 'react';
import profileImage from '../assets/Images/profileImage.png';
import InteractiveSphere from './InteractiveSphere';

function HomeSection() {
  const introText = "Hi There! I'm \n";
  const nameText = "Anees Shaik\n";
  const specialText = "A passionate Full Stack Developer 🚀 \nHaving an experience of building web applications";
  
  const fullText = introText + nameText + specialText; // Concatenated full text

  const [displayText, setDisplayText] = useState(""); // Holds the displayed text
  const [index, setIndex] = useState(0); // Current index in the full text
  const [showCursor, setShowCursor] = useState(true); // Controls cursor visibility

  useEffect(() => {
    let timer;
    if (index < fullText.length) {
      timer = setTimeout(() => {
        setDisplayText(displayText + fullText[index]);
        setIndex(index + 1);
      }, 90); // Typing speed
    } else {
      // Stop the cursor from blinking once the full text is displayed
      setShowCursor(false);
    }

    return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
  }, [index, displayText, fullText]);

  // Determine the parts of the text
  const introPart = displayText.substr(0, introText.length);
  const namePart = displayText.substr(introText.length, nameText.length);
  const specialPart = displayText.substr(introText.length + nameText.length);

  return (
    <div className="home-section">
      <div className="interactive-sphere-container">
        <InteractiveSphere color="#00fffc" numberOfNodes={800} />
      </div>
      <div className="text-wrapper">
        <pre>
          {introPart}
          <span className="name-text">{namePart}</span>
          <span className="special-text">{specialPart}</span>
          {showCursor && <span className="blinking-cursor">|</span>}
        </pre>
      </div>
      <img src={profileImage} alt="Profile" className="profile-image" />
    </div>
  );
}

export default HomeSection;
