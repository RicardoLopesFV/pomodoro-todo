import { Main } from "./Main/Main";
import { Sidebar } from "./Sidebar/Sidebar";
import "./DashboardLayout.scss";

export const DashboardLayout = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <Main />
    </div>
  );
};
