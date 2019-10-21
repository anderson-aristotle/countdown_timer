import React, { Component } from "react";

import Stopwatch from "./Stopwatch";
import Countdown from "./Countdown";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="timeIsMoney">Time is Now</h2>

        <Stopwatch />
        <Countdown />
      </div>
    );
  }
}
export default App;
