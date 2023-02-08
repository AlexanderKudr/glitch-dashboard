import { NavLink, To } from "react-router-dom";
export interface NavLink {
  name: string;
  to: any;
  icon: React.ReactNode;
}
export const CustomNavLink = ({ to, name, icon}: NavLink) => {
  return (
    <NavLink style={{textDecoration: "none"}} to={`${to}`} end>
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
