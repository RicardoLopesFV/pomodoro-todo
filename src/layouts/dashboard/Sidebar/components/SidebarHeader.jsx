import { Bell, CircleUserRound } from "lucide-react";

export const SidebarHeader = () => {
  return (
    <div className="sidebar__header">
      <div className="sidebar__user-name-container">
        <CircleUserRound size={35} />
        <h3 className="sidebar__user-name">User name</h3>
      </div>
      <div className="sidebar__actions-container">
        <Bell size={20} />
      </div>
    </div>
  );
};
