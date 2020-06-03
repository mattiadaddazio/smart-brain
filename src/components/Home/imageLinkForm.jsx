import React from "react";
import "./imageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="form-inline d-flex justify-content-center">
      <div className="form-group mb-2">
        <input
          id="input"
          type="text"
          className="form-control"
          placeholder="Image URL"
          onChange={onInputChange}
        />
      </div>
      <button
        id="detectButton"
        onClick={onButtonSubmit}
        className="btn btn-outline-primary mb-2"
      >
        Detect
      </button>
    </div>
  );
};

export default ImageLinkForm;
