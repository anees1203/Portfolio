import React from 'react';
import YourImage from "../assets/Images/project1.png";

function WorkSection() {
  return (
    <div className="work-section">
      <h1 className="work-heading">{'< P R O J E C T S >'}</h1>
      <p className="tagline">Here you will find some of my personal projects.</p>

      <div className="content-container">
        <div className="image1-container">
          <img src={YourImage} alt="Your Image" />
        </div>
        <div className="text-section">
          <h2 className="text-heading">{'Diabetes Diet Hub'}</h2>
          <p className="text">DDH is a project I developed, focused on providing personalized health management tools. It's built to empower users to confidently manage their well-being with the support of a community, marking my commitment to innovative health solutions.</p>
        </div>
      </div>
    </div>
  );
}

export default WorkSection;
