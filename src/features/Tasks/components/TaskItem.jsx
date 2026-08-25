import { Trash2, Circle, SquarePen } from "lucide-react";

export const TaskItem = () => {
  return (
    <li className="main__task-item">
      <div className="main__task-content">
        <Circle size={20} />
        Study React
      </div>
      <div className="main__task-actions">
        <Trash2 size={20} />
        <SquarePen size={20} />
      </div>
    </li>
  );
};
