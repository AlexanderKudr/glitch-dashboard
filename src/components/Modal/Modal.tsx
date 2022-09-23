import { useState } from "react";
import { Dialog } from "@headlessui/react";
import "./Modal.scss";
import { FaQuestionCircle } from "react-icons/fa";

export const Modal = ({title, modalText}:{title:string, modalText:string}) => {
  let [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="text">
        <p>{title}</p>
        <FaQuestionCircle className="mark" onClick={handleModal} />
      </div>
      <Dialog className="dialog" open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel>
          <Dialog.Description className="modal-text">
            {modalText}
            <span
              style={{ color: "white", fontSize: "0.5rem" }}
              onClick={() => setIsOpen(false)}
            >
              X
            </span>
          </Dialog.Description>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};
