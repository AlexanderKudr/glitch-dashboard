import "./Sidebar.scss";
import { Navbar, AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { FaDesktop, FaBuffer, FaCode, FaDatabase } from "react-icons/fa";

interface Links {
  icon: JSX.Element;
  text: string;
}
export const Sidebar = () => {
  const linksList: Links[] = [
    { icon: <FaDesktop />, text: "Dashboard" },
    { icon: <FaBuffer />, text: "Plugins" },
    { icon: <FaCode />, text: "Commands" },
    { icon: <FaDatabase />, text: "Logs" },
  ];
  const list = linksList.map((item) => (
    <li className="list-icons">
      {item.icon}
      <span className="list-text">{item.text}</span>
    </li>
  ));

  return (
    <>
      <AppShell>
        <Navbar
          className="nav"
          width={{
            // When viewport is larger than theme.breakpoints.sm, Navbar width will be 300
            sm: 250,
            // When viewport is larger than theme.breakpoints.lg, Navbar width will be 400
            lg: 350,
            // When other breakpoints do not match base width is used, defaults to 100%
            base: 100,
          }}
        >
          <Navbar.Section className="top-header">
            <img
              width={100}
              src="src\assets\logo\Logo, no text tranparent.png"
            />
            <span className="logo-text">GLITCH</span>
          </Navbar.Section>
          <Navbar.Section mt="lg">
            <ul>{list}</ul>
          </Navbar.Section>
          <Navbar.Section>{/* Footer with user */}</Navbar.Section>
        </Navbar>
        <Outlet />
      </AppShell>
    </>
  );
};
