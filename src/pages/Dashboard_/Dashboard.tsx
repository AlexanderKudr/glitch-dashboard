import { BotSettings } from "./partials/BotSettings";
import { RecentActivity } from "./partials/RecentActivity";
import { ServerInfo } from "./partials/ServerInfo";

export const Dashboard = () => {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ServerInfo />
      <BotSettings />
      <RecentActivity />
    </div>
  );
};
