import "./ServerInfo.scss";
import { FaRegCopy } from "react-icons/fa";
import { Tip } from "../../../components/Tip/Tip";
import { useTheme } from "../../../hooks/useTheme";
import { useClipboard } from "@mantine/hooks";
import { useState } from "react";
import { Tooltip, Button } from "@mantine/core";

export const ServerInfo = () => {
  
  const { themeFunc } = useTheme();
  const modalText = `You can ask kynoshi#7193
  in the discord about the bot
  and Alex_#6097 if you need
  help with the dashboard`;
  const serverInfo = [
    "Members:",
    "Categories:",
    "Text Channels:",
    "Voice Channels:",
    "Roles:",
  ];
  const infoList = serverInfo.map((info, index) => <li key={index}>{info}</li>);

  const clipboard = useClipboard({ timeout: 500 });
  let timeoutref: number;

  const [opened, setOpened] = useState(false);
  const toolTipHandle = () => {
    if (opened) return;
    clearTimeout(timeoutref);
    clipboard.copy("1008061995095957705");
    setOpened(!opened);
    timeoutref = setTimeout(() => {
      setOpened(opened);
    }, 1000);
  };
  return (
    <main className="serv-info">
      <h1 className="header">SERVER INFO</h1>
      <div className="info-other">
        <div className="info">
          <ul>{infoList}</ul>
        </div>
        <div className="other">
          <div className="serv-id">
            <span>Server id</span>
            <Tooltip
              label="Copied"
              color="#601b88"
              position="top-start"
              width={65}
              opened={opened}
              onClick={toolTipHandle}
            >
              <div>
                <FaRegCopy className="mark" />
              </div>
            </Tooltip>
          </div>
          <span className="help">
            <Tip title={"If you need help!"} modalText={modalText} />
          </span>
        </div>
      </div>
    </main>
  );
};
