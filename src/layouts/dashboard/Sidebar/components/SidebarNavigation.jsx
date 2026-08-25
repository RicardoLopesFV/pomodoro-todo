import {
  Inbox,
  CalendarFold,
  CalendarDays,
  CalendarClock,
  SquareUserRound,
  BriefcaseBusiness,
  Layers,
} from "lucide-react";

export const SidebarNavigation = () => {
  return (
    <>
      <ul className="sidebar__mail-list">
        <li className="sidebar__mail-item sidebar__mail-item--active">
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
      <h3 className="sidebar__projects-title">Projects</h3>
      <ul className="sidebar__projects-list">
        <li className="sidebar__projects-item">
          <SquareUserRound size={20} />
          Personal
        </li>
        <li className="sidebar__projects-item">
          <BriefcaseBusiness size={20} />
          Business
        </li>
        <li className="sidebar__projects-item">
          <Layers size={20} />
          Development
        </li>
      </ul>
    </>
  );
};
