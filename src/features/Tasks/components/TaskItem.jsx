import { Trash2, Circle, SquarePen } from "lucide-react";
import "./TaskItem.scss";

export const TaskItem = () => {
  return (
    <li className="task-item">
      <div className="task-item__content">
        <Circle size={20} />
        Study React
      </div>
      <div className="task-item__actions">
        <Trash2 size={20} />
        <SquarePen size={20} />
      </div>
    </li>
  );
};
