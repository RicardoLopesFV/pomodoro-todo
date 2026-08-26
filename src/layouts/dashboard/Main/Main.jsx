import "./Main.scss";
import { Tasks } from "../../../features/Tasks/Tasks";
import { PomodoroTimer } from "../../../features/PomodoroTimer/PomodoroTimer";
import { AddTask } from "../../../features/AddTask/Addtask";

export const Main = () => {
  return (
    <main className="main">
      <h1 className="main__focus">Focus: Inbox</h1>
      <PomodoroTimer />
      <div className="main__container">
        <h3 className="main__tasks-focus">Tasks: Inbox</h3>
        <AddTask />
        <Tasks />
      </div>
    </main>
  );
};
