import React, { Component, useState } from "react";
import "../styles/App.css";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import Location from "./Location";

function About() {
  return (
    <div>
      <h3>You are on the about page.</h3>
    </div>
  );
}
function Home() {
  return (
    <div>
      <h3>You are home.</h3>
    </div>
  );
}

function OtherPath() {
  return <div>No match</div>;
}

class App extends Component {
  render() {
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" exact component={Home} />
          <Route path="/" component={OtherPath} />
        </Switch>
        <Location />
      </div>
    );
  }
}

export default App;
export const LocationDisplay = Location;
