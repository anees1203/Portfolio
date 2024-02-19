import YourImage from "../assets/Images/project1.png";
import maze from "../assets/Images/maze-2d.png";
import AI from "../assets/Images/AI.jpeg";
import bworks from "../assets/Images/b1.webp";

function WorkSection() {
  return (
    <div className="work-section">
      <h1 className="work-heading">{"< P R O J E C T S >"}</h1>
      <p className="tagline">
        Here you will find some of my personal projects.
      </p>

      {/* First row for the first image-text pair */}
      <div className="content-row">
        {" "}
        {/* Changed className to content-row for clarity */}
        <div className="image1-container">
          <img src={YourImage} alt="Your Image" />
        </div>
        <div className="text-section">
          <h2 className="text-heading">{"Diabetes Diet Hub"}</h2>
          <p className="text">
            DDH is a project I developed, focused on providing personalized
            health management tools. It's built to empower users to confidently
            manage their well-being with the support of a community, marking my
            commitment to innovative health solutions.
          </p>
        </div>
      </div>

      {/* Second row for the second image-text pair */}
      <div className="content-row">
        {" "}
        {/* Using the same className for consistent styling */}
        <div className="text2-section">
          <h2 className="text-heading">
            {"Web application for BWorks-community"}
          </h2>
          <p className="text2">
            Developed a robust online application for BWorks, streamlining
            provider registration and Email automation. This user-friendly
            system improved operational efficiency and transparency. This
            empowered data-driven decisions for community service programs.
          </p>
        </div>
        <div className="image2-container">
          <img src={bworks} alt="Your Image" />
        </div>
      </div>

      {/* Second row for the 3rd image-text pair */}
      <div className="content-row">
        {" "}
        {/* Using the same className for consistent styling */}
        <div className="image3-container">
          <img src={AI} alt="Your Image" />
        </div>
        <div className="text3-section">
          <h2 className="text-heading">
            {"Predicting the Risk of Heart Disease using AI."}
          </h2>
          <p className="text3">
            Conducted research to explore using Artificial Intelligence and
            machine learning algorithms to predict the risk of heart disease.
            The study discussed various algorithms including logistic
            regression, decision trees, neural networks, and KNN.
          </p>
        </div>
      </div>

      {/* 4th row for the 4th image-text pair */}
      <div className="content-row">
        {" "}
        {/* Using the same className for consistent styling */}
        <div className="text4-section">
          <h2 className="text-heading">{"Maze-2D"}</h2>
          <p className="text4">
            The 2D Maze Game is a Java-based application where players navigate
            through a maze using arrow keys to reach a designated goal. The
            objective of the game is to find the exit point in the maze while
            overcoming a time limit along the way. The game is a single-player
            mode.
          </p>
        </div>
        <div className="image4-container">
          <img src={maze} alt="Your Image" />
        </div>
      </div>
    </div>
  );
}

export default WorkSection;
