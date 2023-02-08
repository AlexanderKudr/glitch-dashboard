import "./Sidebar.scss";
import { Navbar, AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { FaDesktop, FaBuffer, FaCode, FaDatabase } from "react-icons/fa";
import { CustomNavLink } from "./CustomNavLink";
import logo from "../../assets/Images/logo.png";
import { getPathname } from "../../routes/pagesRouter";
import {useState} from "react";

export const Sidebar = () => {
  const [input, setInput] = useState("")
  return (
    <>
      <AppShell>
        <Navbar className="nav" width={{ sm: 250, lg: 300, base: 100 }}>
          <Navbar.Section className="top-header">
            <img width={100} src={logo} />
            <span className="logo-text">GLITCH</span>
          </Navbar.Section>
          <Navbar.Section className="middle" mt="lg">
            <ul className="ul">
              <CustomNavLink
                to={`${getPathname()}`}
                icon={<FaDesktop />}
                name="Dashboard"
              />
              <CustomNavLink
                to={`${getPathname()}/plugins`}
                icon={<FaBuffer />}
                name="Plugins"
              />
              <CustomNavLink
                to={`${getPathname()}/commands`}
                icon={<FaCode />}
                name="Commands"
              />
              <CustomNavLink 
                to={`${getPathname()}/logs`}
                icon={<FaDatabase />}
                name="Logs"
              />
            </ul>
          </Navbar.Section>
          <Navbar.Section>{/* Footer with user */}</Navbar.Section>
        </Navbar>
        <Outlet />
      </AppShell>
    </>
  );
};
