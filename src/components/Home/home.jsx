import React, { Component } from "react";
import Clarifai from "clarifai";
import { ToastContainer, Slide, toast } from "react-toastify";
import ImageLinkForm from "./imageLinkForm";
import FaceRecognition from "./faceRecognition";
// import Rank from "./rank";
import "react-toastify/dist/ReactToastify.css";
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

  handleError = (message) => {
    toast(message, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: true,
      transition: Slide,
      className: "my-toast",
      closeButton: false,
    });
  };

  calculateFaceLocation = (data) => {
    const clarifaiRegions = data.outputs[0].data.regions;
    if (!clarifaiRegions) this.handleError("Nothing interesting there...");

    const clarifaiBoxes = clarifaiRegions.map(
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

  handleInputChange = ({ target }) => {
    this.setState({ input: target.value, boxes: [] });
  };

  handleSubmit = () => {
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => {
        this.setState({ boxes: this.calculateFaceLocation(response) });
      })
      .catch((err) => {
        if (err.response.status === 400)
          this.handleError("That's not a valid image");
      });
  };

  handleRandomImage = async () => {
    const { url } = await fetch(
      "https://loremflickr.com/700/700/people,face,faces,group"
    );
    this.setState({ input: url, boxes: [] });
  };

  render() {
    const { input, boxes } = this.state;
    return (
      <div>
        <ToastContainer />
        {/* <Rank /> */}
        <ImageLinkForm
          onInputChange={this.handleInputChange}
          onButtonSubmit={this.handleSubmit}
          onRandomImage={this.handleRandomImage}
          value={input}
        />
        <FaceRecognition boxes={boxes} imgUrl={input} />
      </div>
    );
  }
}

export default Home;
