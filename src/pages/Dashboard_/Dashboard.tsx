import "./Dashboard.scss";
export const Dashboard = () => {
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
            <select className="roles-dropdown">
              <option>Hardcoded lol</option>
            </select>
          </div>
          <div className="updates-channel">
            <label>Updates Channel ICON?</label>
            <select>
              <option>glitchlog Hardcoded again</option>
            </select>
          </div>
        </div>
        <button className="btn">Save</button>
        <div className="dropdown is-hoverable">
          <div className="dropdown-trigger">
            <button
              className="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu"
            >
              <span>Dropdown button</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              <a href="#" className="dropdown-item">
                Dropdown item
              </a>
              <a className="dropdown-item">Other dropdown item</a>
              <a href="#" className="dropdown-item is-active">
                Active dropdown item
              </a>
              <a href="#" className="dropdown-item">
                Other dropdown item
              </a>
              <hr className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                With a divider
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="recent-activity">
        <h3>RECENT ACTIVITY</h3>
        <table>
          <tr>
            <th>Test</th>
            <th>Test2</th>
            <th>Test3</th>
          </tr>
        </table>
      </div>
    </div>
  );
};
