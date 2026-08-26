import { TaskItem } from "./components/TaskItem";
import "./Tasks.scss";

export const Tasks = () => {
  return (
    <ul className="tasks">
      <TaskItem />
      <TaskItem />
    </ul>
  );
};
