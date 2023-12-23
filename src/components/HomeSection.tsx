// HomeSection.js
import React, { useEffect, useState } from 'react';

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
      <pre>{text}</pre>
    </div>
  );
}

export default HomeSection;
