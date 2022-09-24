import "./Dropdown.scss";
import { useState } from "react";
import { Channels } from "../../pages/Dashboard_/utils/Channels";

interface Dropdown {
  element: Channels;
  setElement: any;
  dropdownItems: Channels[];
}
export const Dropdown = ({ element, setElement, dropdownItems }: Dropdown) => {
  const [isActive, setIsActive] = useState(false);
  const handleActive = () => {
    setIsActive(!isActive);
  }; 
  return (
    <div
      onClick={handleActive}
      className={`${isActive ? 'dropdown is-active' : 'dropdown'}`}
    >
      <div className="dropdown-trigger">
        <button
          className="listbox"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          <span>{element.title}</span>
        </button>
      </div>
      <div
        onMouseLeave={() => setIsActive(false)}
        className="dropdown-menu"
        id="dropdown-menu"
        role="menu"
      >
        <div style={{ cursor: "pointer" }} className="dropdown-content">
          {dropdownItems.map((item: any, index: number) => (
            <div
              onClick={() => setElement(item)}
              className="dropdown-item"
              key={index}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
