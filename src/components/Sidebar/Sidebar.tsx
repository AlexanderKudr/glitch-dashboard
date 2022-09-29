import "./Sidebar.scss";
import { Navbar, AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { FaDesktop, FaBuffer, FaCode, FaDatabase } from "react-icons/fa";
import { CustomNavLink } from "./CustomNavLink";

export const Sidebar = () => {
  return (
    <>
      <AppShell>
        <Navbar className="nav" width={{ sm: 250, lg: 300, base: 100 }}>
          <Navbar.Section className="top-header">
            <img
              width={100}
              src="src\assets\logo\Logo, no text tranparent.png"
            />
            <span className="logo-text">GLITCH</span>
          </Navbar.Section>
          <Navbar.Section className="middle" mt="lg">
            <ul className="ul">
              <CustomNavLink to="/" icon={<FaDesktop />} name="Dashboard" />
              <CustomNavLink to="/plugins" icon={<FaBuffer />} name="Plugins" />
              <CustomNavLink to="/commands" icon={<FaCode />} name="Commands" />
              <CustomNavLink to="/logs" icon={<FaDatabase />} name="Logs" />
            </ul>
          </Navbar.Section>
          <Navbar.Section>{/* Footer with user */}</Navbar.Section>
        </Navbar>
        <Outlet />
      </AppShell>
    </>
  );
};
