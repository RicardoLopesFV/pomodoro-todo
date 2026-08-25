import { Search } from "lucide-react";

export const SidebarSearch = () => {
  return (
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
  );
};
