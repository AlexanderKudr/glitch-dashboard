import "./Sidebar.scss";
import { Navbar, AppShell } from "@mantine/core";
import { Outlet, Link, useLocation } from "react-router-dom";
import { FaDesktop, FaBuffer, FaCode, FaDatabase } from "react-icons/fa";
import { nanoid } from "nanoid";
import { useState } from "react";

interface Links {
  id: string;
  icon: JSX.Element;
  text: string;
  active: boolean;
  link: string;
}
export const Sidebar = () => {
  const [linksList, setLinksList] = useState<Links[]>([
    {
      id: nanoid(),
      icon: <FaDesktop />,
      text: "Dashboard",
      active: true,
      link: "/",
    },
    {
      id: nanoid(),
      icon: <FaBuffer />,
      text: "Plugins",
      active: false,
      link: "/plugins",
    },
    {
      id: nanoid(),
      icon: <FaCode />,
      text: "Commands",
      active: false,
      link: "/commands",
    },
    {
      id: nanoid(),
      icon: <FaDatabase />,
      text: "Logs",
      active: false,
      link: "/logs",
    },
  ]);
  const isActive = (id: string) => {
    //styling list
    let newArray: Links[] = linksList.map((item) => {
      item.active = item.id === id;
      return item;
    });
    setLinksList(newArray);
    // let newArray = [...linksList];
    // for (let i = 0; i < newArray.length; i++) {
    //   newArray[i].active = newArray[i].id === id;
    // }
    // setLinksList(newArray);
  };
  const location = useLocation();

  return (
    <>
      <AppShell>
        <Navbar
          className="nav"
          width={{ sm: 250, lg: 300, base: 100 }}
          // When viewport is larger than theme.breakpoints.sm,
          // Navbar width will be 300
          // When viewport is larger than theme.breakpoints.lg,
          // Navbar width will be 400
          // When other breakpoints do not match base width is used,
          // defaults to 100%
        >
          <Navbar.Section className="top-header">
            <img
              width={100}
              src="src\assets\logo\Logo, no text tranparent.png"
            />
            <span className="logo-text">GLITCH</span>
          </Navbar.Section>
          <Navbar.Section className="middle" mt="lg">
            <ul className="ul">
              {linksList.map((item) => (
                <li
                  className="list"
                  key={item.id}
                  onClick={() => {
                    isActive(item.id);
                  }}
                >
                  <Link className="link" to={item.link}>
                    <span
                      className={`${
                        item.link === location.pathname
                          ? "list-icons list-icons-active"
                          : "list-icons"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span
                      className={`${
                        item.active ? "list-text list-text-active" : "list-text"
                      }`}
                    >
                      {item.text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Navbar.Section>
          <Navbar.Section>{/* Footer with user */}</Navbar.Section>
        </Navbar>
        <Outlet />
      </AppShell>
    </>
  );
};
