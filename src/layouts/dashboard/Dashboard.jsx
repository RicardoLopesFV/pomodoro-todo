import { Main } from "./Main/Main";
import { Sidebar } from "./Sidebar/Sidebar";
import "./Dashboard.scss";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <Main />
    </div>
  );
};
