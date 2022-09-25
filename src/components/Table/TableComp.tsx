import "./TableComp.scss";
import { Table } from "@mantine/core";
import { RecentActivities } from "../../pages/Dashboard_/utils/RecentActivities";

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
    <Table highlightOnHover>
      <thead>
        <tr>
          <th className="th1">Date</th>
          <th>User</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};
