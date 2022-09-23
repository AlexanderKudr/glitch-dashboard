import { useState } from "react";
import { Checkbox } from "../../../components/Checkbox/Checkbox";
import { Dropdown } from "../../../components/Dropdown/Dropdown";
import { Channels, channels } from "../utils/Channels";
import { roles } from "../utils/ManagerRoles";
import { Modal } from "../../../components/Modal/Modal";
import "./BotSettings.scss";

export const BotSettings = () => {
  const [role, setRole] = useState<Channels>({ id: 1, title: "Choose one" });
  const [channel, setChannel] = useState<Channels>({ id: 1, title: "Channel" });
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
          <Dropdown dropdownItems={roles} element={role} setElement={setRole} />
        </div>
        <div className="manager-roles">
          <Modal
            title={"Updates Channel"}
            modalText={
              "Receive instant notifications when glitch receives a new update."
            }
          />
          <Dropdown
            dropdownItems={channels}
            element={channel}
            setElement={setChannel}
          />
        </div>
      </div>
      <button className="save-btn">Save</button>
    </div>
  );
};
