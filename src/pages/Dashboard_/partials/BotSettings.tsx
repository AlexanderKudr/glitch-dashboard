import { useState } from "react";
import { Checkbox } from "../../../components/Checkbox/Checkbox";
import { Dropdown } from "../../../components/Dropdown/Dropdown";
import { channels } from "../utils/Channels";
import { roles } from "../utils/ManagerRoles";
import { Tip } from "../../../components/Tip/Tip";
import "./BotSettings.scss";
import "../../../sass/components/button.scss";

export const BotSettings = () => {
  const [role, setRole] = useState<string | null>(null);
  const [channel, setChannel] = useState<string | null>(null);

  return (
    <div className="bot-settings">
      <h3>BOT SETTINGS</h3>
      <div className="inputs-checkboxes">
        <Checkbox text={"Make commands moderator only"} />
        <Checkbox text={"Disable warnings for disabled commands/plugins"} />
      </div>
      <div className="inputs-texts">
        <div className="command-prefix">
          <label>Command Prefix</label>
          <input className="prefix-input" type="text" placeholder=".." />
        </div>
        <div className="manager-roles">
          <label>Manager Roles (Owner/Administator Only)</label>
          <Dropdown
            data={roles}
            placeholder="Select role"
            value={role}
            onChange={setRole}
          />
        </div>
        <div className="manager-roles">
          <span className="updates">
            <Tip
              title={"Updates Channel"}
              modalText={
                "Receive instant notifications when glitch receives a new update."
              }
              withMouseLeave
            />
          </span>

          <Dropdown
            data={channels}
            placeholder="Select Channel"
            value={channel}
            onChange={setChannel}
          />
        </div>
      </div>
      <button className="btn-save">Save</button>
    </div>
  );
};
