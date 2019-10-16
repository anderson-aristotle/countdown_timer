import React, { Component } from "react";
import Countdown from "./Countdown";

class App extends React.Component {
  render() {
    return (
      <div className="Time Is Money">
        <div className="timer-app">Countdown</div>
        <Countdown />
      </div>
    );
  }
}
export default App;
