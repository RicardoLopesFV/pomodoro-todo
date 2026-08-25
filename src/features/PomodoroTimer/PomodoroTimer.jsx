import "./PomodoroTimer.scss";

export const PomodoroTimer = () => {
  return (
    <div className="pomodoro-timer">
      <div className="pomodoro-timer__counter">25:00</div>
      <div className="pomodoro-timer__buttons">
        <button className="pomodoro-timer__btn pomodoro-timer__btn--start">Start</button>
        <button className="pomodoro-timer__btn pomodoro-timer__btn--stop">Stop</button>
        <button className="pomodoro-timer__btn pomodoro-timer__btn--reset">Reset</button>
      </div>
    </div>
  );
};
