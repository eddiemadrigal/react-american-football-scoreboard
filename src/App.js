import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const setTime = time => {
    let newTime = time;
    let minutes = parseInt(newTime / 60, 10);
    let seconds = parseInt(newTime % 60, 10);
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return (minutes + ':' + seconds)
  }

  const startClock = (duration) => {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        //display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

  const [timer, setTimer] = useState(setTime(900));

  const stopClock = () => {

  };
  
  const resetClock = () => {
    setTimer(900)
  };

  const homeAdd7 = () => {
    setHomeScore(homeScore + 7);
  };

  const homeAdd3 = () => {
    setHomeScore(homeScore + 3);
  };

  const awayAdd7 = () => {
    setAwayScore(awayScore + 7);
  };

  const awayAdd3 = () => {
    setAwayScore(awayScore + 3);
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{timer}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <button className="homeButtons__touchdown" onClick = {homeAdd7}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {homeAdd3}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {awayAdd7}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {awayAdd3}>Away Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {startClock(900)}>Start Clock</button>
          <button className="awayButtons__touchdown" onClick = {stopClock}>Stop Clock</button>
          <button className="awayButtons__touchdown" onClick = {resetClock}>Reset Clock</button>
        </div>
      </section>
    </div>
  );
}

export default App;
