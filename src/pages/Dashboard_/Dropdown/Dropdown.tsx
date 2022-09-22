import { useState } from "react";
import "./Dropdown.scss"
import { roles } from "./utils/ManagerRoles";

export const Dropdown = ({ role, setRole }: any) => {

  const [isActive, setIsActive] = useState(false);
  const handleActive = () => {
    setIsActive(!isActive);
  };
  
  return (
    <div
      onClick={handleActive}
      className={isActive ? "dropdown is-active" : "dropdown"}
    >
      <div className="dropdown-trigger">
        <button className="listbox"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          <span>{role.title}</span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div style={{cursor: "pointer"}} className="dropdown-content">
          {roles.map((role, index) => (
            <div
              onClick={() => setRole(role)}
              className="dropdown-item"
              key={index}
            >
              {role.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
