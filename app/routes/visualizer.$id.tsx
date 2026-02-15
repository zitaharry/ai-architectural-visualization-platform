import React from "react";
import { useLocation } from "react-router";

const VisualizerId = () => {
  const location = useLocation();
  const { intialImage, name } = location.state || {};

  return (
    <section>
      <h1>{name || "Untitled Project"}</h1>

      <div className="visualizer">
        {intialImage && (
          <div className="image-container">
            <h2>Source Image</h2>
            <img src={intialImage} alt="Source Image" />
          </div>
        )}
      </div>
    </section>
  );
};
export default VisualizerId;
