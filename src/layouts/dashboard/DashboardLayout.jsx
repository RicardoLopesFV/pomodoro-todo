import { Main } from "./Main/Main";
import { Sidebar } from "./Sidebar/Sidebar";

export const DashboardLayout = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <Main />
    </div>
  );
};
