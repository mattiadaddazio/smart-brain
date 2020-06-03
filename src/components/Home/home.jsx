import React, { Component } from "react";
import ImageLinkForm from "./imageLinkForm";
import FaceRecognition from "./faceRecognition";
import Rank from "./rank";
import Clarifai from "clarifai";
import "./home.css";

const app = new Clarifai.App({
  apiKey: "0af6264b3c424d85bca59eaf27d86eea",
});

class Home extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      boxes: [],
    };
  }

  calculateFaceLocation = (data) => {
    const clarifaiBoxes = data.outputs[0].data.regions.map(
      (r) => r.region_info.bounding_box
    );
    const { width, height } = document.getElementById("inputImage");

    return clarifaiBoxes.map((b) => {
      return {
        left: width * b.left_col,
        top: height * b.top_row,
        right: width - width * b.right_col,
        bottom: height - height * b.bottom_row,
      };
    });
  };

  onInputChange = ({ target }) => {
    this.setState({ input: target.value, boxes: [] });
  };

  onSubmit = () => {
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => {
        this.setState({ boxes: this.calculateFaceLocation(response) });
      });
  };

  render() {
    return (
      <div>
        {/* <Rank /> */}
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onSubmit}
        />
        <FaceRecognition boxes={this.state.boxes} imgUrl={this.state.input} />
      </div>
    );
  }
}

export default Home;
