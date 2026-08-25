import "./Main.scss";
import { Tasks } from "../../../features/Tasks/Tasks";
import { PomodoroTimer } from "../../../features/PomodoroTimer/PomodoroTimer";
import { AddTask } from "../../../features/AddTask/Addtask";

export const Main = () => {
  return (
    <main className="main">
      <h1 className="main__focus">Focus: [Selected Item]</h1>
      <PomodoroTimer />
      <div className="main__tasks-container">
        <h3 className="main__tasks-title">Tasks ([Selected item])</h3>
        <AddTask />
        <Tasks />
      </div>
    </main>
  );
};
