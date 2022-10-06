import "./TableComp.scss";
import { Table } from "@mantine/core";
import { RecentActivities } from "../../utils/RecentActivities";

interface TableInt {
  tableContent: RecentActivities[];
}

export const TableComp = ({ tableContent }: TableInt) => {
  const rows = tableContent.map(({id, date, user, action}) => (
    <tr key={id}>
      <td>{date}</td>
      <td>{user}</td>
      <td>{action}</td>
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
