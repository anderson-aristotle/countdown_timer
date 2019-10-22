import React, { Component } from "react";

import Stopwatch from "./Stopwatch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="timeIsMoney">Time is Now</h2>

        <Stopwatch />
      </div>
    );
  }
}
export default App;
