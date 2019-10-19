import React, { Component } from "react";
import "./App.css";

class Stopwatch extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };

  startTimer = () => {
    this.setState(
      {
        timerOn: true,
        timerTime: this.state.timerTime,
        timerStart: Date.now() - this.state.timerTime
      },
      10
    );
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setStare({
      timerStart: 0,
      timerTime: 0
    });
  };

  render() {
    return (
      <React.Fragment>
        <div></div>
      </React.Fragment>
    );
  }
}
export default Stopwatch;

// {
//   this.state.timerOn === false && this.state.timerTime === 0 && (
//     <button onClick={this.startTimer}>Start</button>
//   );
// }
// {
//   this.state.timerOn === true && (
//     <button onClick={this.stopTimer}>Stop</button>
//   );
// }
// {
//   this.state.timerOn === false && this.state.timerTime > 0 && (
//     <button onClick={this.startTimer}>Resume</button>
//   );
// }
// {
//   this.state.timerOn === false && this.state.timerTime > 0 && (
//     <button onClick={this.resetTimer}>Reset</button>
// }
