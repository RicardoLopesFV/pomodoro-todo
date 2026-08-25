import { Plus } from "lucide-react";
import "./AddTask.scss";

export const AddTask = () => {
  return (
    <div className="add-task">
      <input
        className="add-task__input"
        type="text"
        name="text"
        id="text"
        placeholder="Add new task"
      />
      <button className="add-task__btn">
        <Plus />
      </button>
    </div>
  );
};
