import "./Dashboard.scss";
import { BotSettings } from "./partials/BotSettings";
import { RecentActivity } from "./partials/RecentActivity";
import { ServerInfo } from "./partials/ServerInfo";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <ServerInfo />
      <BotSettings />
      <RecentActivity />
    </div>
  );
};
