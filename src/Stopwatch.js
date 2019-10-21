import React, { Component } from "react";

import "./App.css";

class Stopwatch extends Component {
  // set state
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };
  // set the in state memory of StopWatch
  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
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
    const { timerOn, timerStart, timerTime } = this.state;
    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);
    return (
      <div className="Stopwatch-display">
        {hours} : {minutes} : {seconds} : {centiseconds}
        {this.state.timerOn === false && this.state.timerTime === 0 && (
          <button onClick={this.startTimer}>Starte</button>
        )}
      </div>
    );
  }
}

export default Stopwatch;
