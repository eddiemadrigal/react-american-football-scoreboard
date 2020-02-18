import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {

  let duration = 900;

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const setTime = time => {
    let minutes = parseInt(time / 60, 10);
    let seconds = parseInt(time % 60, 10);
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return (minutes + ':' + seconds)
  }

  const [timer, setTimer] = useState(setTime(duration));

  let display = "";
  let minutes = 0;
  let seconds = 0;
  let newTimer = duration;

  let runClock = () => {
      
      minutes = parseInt(newTimer / 60, 10);
      seconds = parseInt(newTimer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display = minutes + ":" + seconds;
      setTimer(display);

      if (--newTimer < 0) {
          newTimer = duration;
      }

  }

  function startClock() {
    setInterval(runClock, 1000);
  };

  const stopClock = () => {

  };

  const resetClock = () => {
    startClock(900)
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
          <button className="homeButtons__touchdown" onClick={homeAdd7}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={homeAdd3}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={awayAdd7}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={awayAdd3}>Away Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={startClock}>Start Clock</button>
          <button className="awayButtons__touchdown" onClick={stopClock}>Stop Clock</button>
          <button className="awayButtons__touchdown" onClick={resetClock}>Reset Clock</button>
        </div>
      </section>
    </div>
  );
}

export default App;
