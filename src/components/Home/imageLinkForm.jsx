import React, { Fragment } from "react";
import "./imageLinkForm.css";
import { GiRollingDices } from "react-icons/gi";

const ImageLinkForm = ({
  onInputChange,
  onButtonSubmit,
  onRandomImage,
  value,
}) => {
  return (
    <Fragment>
      <p id="prompt">
        Enter an image URL and the Smart Brain will detect faces...
      </p>
      <div className="form-inline d-flex justify-content-center">
        <GiRollingDices id="random" onClick={onRandomImage} />
        <div className="form-group mb-2">
          <input
            id="input"
            type="text"
            className="form-control"
            placeholder="Image URL"
            onChange={onInputChange}
            value={value}
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
    </Fragment>
  );
};

export default ImageLinkForm;
