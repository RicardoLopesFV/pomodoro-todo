import { Inbox, CalendarFold, CalendarDays, CalendarClock, Search, Plus } from "lucide-react";
import "./Sidebar.scss";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__user-name-container">
          {/* User Icon */}
          <h3 className="sidebar__user-name">User name</h3>
        </div>
        <div className="sidebar__actions-container">
          {/* Action Icon */}
          {/* Action Icon */}
        </div>
      </div>
      <div className="sidebar__search-box">
        <Search size={20} />
        <input
          className="sidebar__input-search"
          type="search"
          name="search-input"
          id="search-input"
          placeholder="Search"
        />
      </div>
      <ul className="sidebar__mail-list">
        <li className="sidebar__mail-item">
          <Inbox size={20} />
          Inbox
        </li>
        <li className="sidebar__mail-item">
          <CalendarFold size={20} />
          Today
        </li>
        <li className="sidebar__mail-item">
          <CalendarDays size={20} />
          Tomorrow
        </li>
        <li className="sidebar__mail-item">
          <CalendarClock size={20} />
          Upcoming
        </li>
      </ul>
      <button className="sidebar__add-task-btn">
        Add task
        <Plus size={20} color="#cad3f5" />
      </button>
    </aside>
  );
};
