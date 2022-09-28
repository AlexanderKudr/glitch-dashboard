import "./ServerInfo.scss";
import { FaRegCopy } from "react-icons/fa";
import { Tip } from "../../../components/Tip/Tip";
import { useTheme } from "../../../hooks/useTheme";

import { useClipboard } from "@mantine/hooks";

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

  const clipboard = useClipboard({timeout: 500});
  const copied = () => {
    clipboard.copy("1008061995095957705");
  }
  return (
    <main className="serv-info">
      <h1 className="header">SERVER INFO</h1>
      <div className="info-other">
        <div className="info">
          <ul>{infoList}</ul>
        </div>
        <div className="other">
          <span className="serv-id">
            Server id
            <FaRegCopy className="mark" />
          </span>
          <span className="help">
            <Tip title={"If you need help!"} modalText={modalText} />
          </span>
        </div>
      </div>
    </main>
  );
};
