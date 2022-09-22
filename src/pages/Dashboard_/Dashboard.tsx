import { useState } from "react";
import "./Dashboard.scss";
import { Dropdown } from "./Dropdown/Dropdown";

export const Dashboard = () => {
  const [role, setRole] = useState({title: "Choose one"});

  return (
    <div className="dashboard">
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
            <span className="serv-id">Server id</span>
            <span className="help">If you need help!</span>
          </div>
        </div>
      </div>
      <div className="bot-settings">
        <h3>BOT SETTINGS</h3>
        <div className="inputs-checkboxes">
          <div className="check1">
            <input type="checkbox" />
            <p>Make commands moderator only</p>
          </div>
          <div className="check2">
            <input type="checkbox" />
            <p>Disable warnings for disabled commands/plugins</p>
          </div>
        </div>
        <div className="inputs-texts">
          <div className="command-prefix">
            <label>Command Prefix</label>
            <input className="prefix-input" type="text" placeholder=".." />
          </div>
          <div className="manager-roles">
            <label>Manager Roles (Owner/Administator Only)</label>
            <Dropdown role={role} setRole={setRole} />
          </div>
          <div className="updates-channel">
            <label>Updates Channel ICON?</label>
            <select>
              <option>glitchlog Hardcoded again</option>
            </select>
          </div>
        </div>
        <button className="btn">Save</button>

      </div>
      {/* <div className="recent-activity">
        <h3>RECENT ACTIVITY</h3>
        <table>
          <tr>
            <th>Test</th>
            <th>Test2</th>
            <th>Test3</th>
          </tr>
        </table>
      </div> */}
    </div>
  );
};

