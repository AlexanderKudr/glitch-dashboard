import "./ServerInfo.scss";
import { FaRegCopy } from "react-icons/fa";
export const ServerInfo = () => {
  return (
    <div className="serv-info">
      <h3 className="header">SERVER INFO</h3>
      <div className="info-other">
        <div className="info">
          <ul>
            <li>Members:</li>
            <li>Categories:</li>
            <li>Text Channels:</li>
            <li>Voice Channels:</li>
            <li>Roles:</li>
          </ul>
        </div>
        <div className="other">
          <span className="serv-id">Server id<FaRegCopy className="mark"/></span>
          <span className="help">If you need help!</span>
        </div>
      </div>
    </div>
  );
};
