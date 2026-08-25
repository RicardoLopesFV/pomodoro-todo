import { Plus } from "lucide-react";
import "./Main.scss";

export const Main = () => {
  return (
    <main className="main">
      <h1 className="main__focus">Focus: [Selected Item]</h1>
      <div className="main__pomodoro-timer-circle">
        <div className="main__timer-counter">25:00</div>
        <div className="main__timer-buttons">
          <button className="main__timer-btn main__timer-btn--start">Start</button>
          <button className="main__timer-btn main__timer-btn--stop">Stop</button>
          <button className="main__timer-btn main__timer-btn--reset">Reset</button>
        </div>
      </div>
      <div className="main__tasks-container">
        <h3 className="main__tasks-title">Tasks ([Selected item])</h3>
        <div className="main__add-task-container">
          <input className="main__input-add-task" type="text" name="text" id="text" />
          <button className="main__add-task-btn">
            <Plus />
          </button>
        </div>
        <ul className="main__tasks-list">
          <li className="main__task-item">Study React</li>
          <li className="main__task-item">Gym</li>
          <li className="main__task-item">Pharmacy</li>
        </ul>
      </div>
    </main>
  );
};
