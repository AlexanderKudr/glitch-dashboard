import { NavLink } from "react-router-dom";
export const CustomNavLink = ({ to, name, icon }: any) => {
  return (
    <NavLink to={`${to}`} end>
      {({ isActive }) => (
        <li className="list">
          <span className={`list-icons ${isActive ? "list-icons-active" : ""}`}>
            {icon}
          </span>
          <span className={`list-text ${isActive ? "list-text-active" : ""}`}>
            {name}
          </span>
        </li>
      )}
    </NavLink>
  );
};
