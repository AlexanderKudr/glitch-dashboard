import "./TableComp.scss";
import { Table } from "@mantine/core";
import { RecentActivities } from "../../utils/RecentActivities";

interface TableInt {
  tableContent: RecentActivities[];
}

export const TableComp = ({ tableContent }: TableInt) => {
  const rows = tableContent.map((activity) => (
    <tr key={activity.id}>
      <td>{activity.date}</td>
      <td>{activity.user}</td>
      <td>{activity.action}</td>
    </tr>
  ));
  return (
    <Table >
      <thead className="tets">
        <tr className="tets">
          <th>
            <span className="th1">Date</span>
          </th>
          <th>
            <span className="th1">User</span>
          </th>
          <th>
            <span className="th1">Action</span>
          </th>
        </tr>
      </thead>
      <tbody className="throw">{rows}</tbody>
    </Table>
  );
};
