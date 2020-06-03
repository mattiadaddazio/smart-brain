import React from "react";
import "./faceRecognition.css";

const FaceRecognition = ({ imgUrl, boxes }) => {
  return (
    <div className="imageContainer">
      <img id="inputImage" src={imgUrl} alt="" />
      {boxes.map((box) => (
        <div
          key={box.left}
          className="bounding_box"
          style={{
            left: box.left,
            top: box.top,
            right: box.right,
            bottom: box.bottom,
          }}
        />
      ))}
    </div>
  );
};

export default FaceRecognition;
