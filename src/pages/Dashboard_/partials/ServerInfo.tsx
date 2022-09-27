import "./ServerInfo.scss";
import { FaRegCopy } from "react-icons/fa";
import { Tip } from "../../../components/Tip/Tip";
import { useTheme } from "../../../hooks/useTheme";
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


  return (
    <main className="serv-info">
      <h3 className="header">
        SERVER INFO<button onClick={themeFunc}>Change me</button>
      </h3>
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
