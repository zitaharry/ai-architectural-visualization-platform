import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";

const VisualizerId = () => {
  const { id } = useParams();
  const location = useLocation();
  const [base64Image, setBase64Image] = useState<string | null>(
    location.state?.base64 || null,
  );

  useEffect(() => {
    if (!base64Image && id) {
      const storedImage = localStorage.getItem(`uploadedImage:${id}`);
      if (storedImage) {
        setBase64Image(storedImage);
      }
    }
  }, [id, base64Image]);

  return (
    <div className="visualizer-route">
      <h1>Visualizer for {id}</h1>
      {base64Image ? (
        <img
          src={base64Image}
          alt="Uploaded floor plan"
          style={{ maxWidth: "100%" }}
        />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
};
export default VisualizerId;
