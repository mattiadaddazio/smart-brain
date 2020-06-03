import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Particles from "react-particles-js";
import Home from "./components/Home/home";
import Register from "./components/Register/register";
import Signin from "./components/SignIn/signin";
import HomeNavigation from "./components/Navigation/homeNavigation";
import OutsideNavigation from "./components/Navigation/outsideNaigation";
import "./App.css";

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: false,
    };
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Switch>
          <Route
            path={["/smart-brain/signin", "/smart-brain/register"]}
            component={OutsideNavigation}
          />
          <Route path="/smart-brain" component={HomeNavigation} />
        </Switch>
        <Switch>
          <Route path="/smart-brain/signin" component={Signin} />
          <Route path="/smart-brain/register" component={Register} />
          <Route path="/smart-brain/home" component={Home} />
          <Redirect from="/smart-brain" to="/smart-brain/home" />
          {/* <Redirect from="/" to="/smart-brain" /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
