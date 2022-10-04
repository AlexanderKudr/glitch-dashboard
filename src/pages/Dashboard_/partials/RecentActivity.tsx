import { TableComp } from "../../../components/Table/TableComp";
import { activities } from "../../../utils/RecentActivities";
import "./RecentActivity.scss";
export const RecentActivity = () => {
  return (
    <div className="recent-activity">
      <h3>RECENT ACTIVITY</h3>
      <TableComp tableContent={activities} />
    </div>
  );
};
