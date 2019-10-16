import React, { Component } from "react";
import "./App.css";
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

class Countdown extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTIme: 0
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timeStart: this.state.timerTime
    });
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 10;
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime
        });
      } else {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
        alert("Done!");
      }
    }, 10);
  };
  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };
  resetTimer = () => {
    if (this.state.timeOn === false) {
      this.setState({
        timerTime: this.state.timerStart
      });
    }
  };
  render() {
    return (
      <div className="Countdown-label">
        Hours : Minutes : Seconds
        <div className="Countdown-header">Countdown</div>
        const {(timerTime, timeStart, timerOn)} = this.state; lets seconds =
        ("0" + Math.floor((timerTime / 1000) % 60).slice(-2); let minutes = ("0"
        + Math.floor((timerTime / 6000) % 60)).splice(-2) let hours = ("0" +
        Math.floor ((timerTIme / 3600000) % 60)).splice(-2);
        <button onClick={() => this.adjustTimer("incHours")}>&#8679</button>;
      </div>
    );
  }
}
export default Countdown;
