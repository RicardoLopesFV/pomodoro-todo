import { Plus } from "lucide-react";
import "./Sidebar.scss";
import { SidebarHeader } from "./components/SidebarHeader";
import { SidebarSearch } from "./components/SidebarSearch";
import { SidebarNavigation } from "./components/SidebarNavigation";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <SidebarHeader />
      <SidebarSearch />
      <SidebarNavigation />
      <button className="sidebar__add-task-btn">
        Add task
        <Plus size={20} color="#cad3f5" />
      </button>
    </aside>
  );
};
