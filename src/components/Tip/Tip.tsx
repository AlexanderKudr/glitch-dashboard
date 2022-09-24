import { useState } from "react";
import "./Tip.scss";
import { FaQuestionCircle } from "react-icons/fa";
import { Tooltip } from "@mantine/core";

interface Modal {
  title: string;
  modalText: string;
  withMouseLeave?: boolean;
}
export const Tip = ({ title, modalText, withMouseLeave = false }: Modal) => {
  const [opened, setOpened] = useState(false);
  const toolTipHandle = () => {
    setOpened(!opened);
  };
  const mouseLeaveHandle = () => {
    setOpened(false);
  };
  return (
    <>
      <div className="text">
        <p>{title}</p>
        <Tooltip
          color="#601b88"
          position="top-start"
          width={200}
          multiline
          opened={opened}
          onClick={toolTipHandle}
          label={modalText}
        >
          <div onMouseLeave={withMouseLeave ? mouseLeaveHandle : undefined}>
            <FaQuestionCircle className="mark" />
          </div>
        </Tooltip>
      </div>
    </>
  );
};
