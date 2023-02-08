import { Logs } from "../pages/Logs_/Logs";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Plugins } from "../pages/Plugins_/Plugins";
import { Commands } from "../pages/Commands_/Commands";
import { ErrorPage } from "../pages/ErrorPage";
import { Dashboard } from "../pages/Dashboard_/Dashboard";
import { createBrowserRouter } from "react-router-dom";

export const getPathname = () => {
  if (window.location.pathname.indexOf("/dashboard") === 0) {
    return `/dashboard`;
  }
};

export const router = createBrowserRouter([
  {
    path: `${getPathname()}`,
    element: <Sidebar />,
    children: [
      {
        path: `${getPathname()}`,
        element: <Dashboard />,
      },
      {
        path: `${getPathname()}/plugins`,
        element: <Plugins />,
      },
      {
        path: `${getPathname()}/commands`,
        element: <Commands />,
      },
      {
        path: `${getPathname()}/logs`,
        element: <Logs />,
      },
    ],
  },
  {
    path: `*`,
    element: <ErrorPage />,
  },
]);
