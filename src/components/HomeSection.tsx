import React, { useEffect, useState } from 'react';
import profileImage from '../assets/Images/profileImage.png';
import InteractiveSphere from './InteractiveSphere';
import my  from '../assets/Images/my.jpg';

function HomeSection() {
  const introText = "Hi There! I'm \n";
  const nameText = "Anees Shaik\n";
  const specialText = "A passionate Developer 🚀 \nCrafting Digital Universes, One Line of Code at a Time.";
  
  // const fullText = introText + nameText + specialText; // Concatenated full text

  // const [displayText, setDisplayText] = useState(""); // Holds the displayed text
  // const [index, setIndex] = useState(0); // Current index in the full text
  // const [showCursor, setShowCursor] = useState(true); // Controls cursor visibility

  // useEffect(() => {
  //   let timer;
  //   if (index < fullText.length) {
  //     timer = setTimeout(() => {
  //       setDisplayText(displayText + fullText[index]);
  //       setIndex(index + 1);
  //     }, 90); // Typing speed
  //   } else {
  //     // Stop the cursor from blinking once the full text is displayed
  //     setShowCursor(false);
  //   }

  //   return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
  // }, [index, displayText, fullText]);

  // // Determine the parts of the text
  // const introPart = displayText.substr(0, introText.length);
  // const namePart = displayText.substr(introText.length, nameText.length);
  // const specialPart = displayText.substr(introText.length + nameText.length);

  return (
    <div className="home-section">
      <div className="interactive-sphere-container">
        <InteractiveSphere color="#00fffc" numberOfNodes={800} />
      </div>
        <div className="content-wrapper">
        <img src={my} alt="Profile" className="profile-im"/>
        <div className="text-wrapper">
          <pre>
            {introText}
            <span className="name-text">{nameText}</span>
            <span className="special-text">{specialText}</span>
            {/* {showCursor && <span className="blinking-cursor">|</span>} */}
          </pre>
        </div>
      </div>
      <img src={profileImage} alt="Profile" className="profile-image" />
    </div>
  );
}

export default HomeSection;
