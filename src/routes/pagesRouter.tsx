import { Logs } from "../pages/Logs_/Logs";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Plugins } from "../pages/Plugins_/Plugins";
import { Commands } from "../pages/Commands_/Commands";
import { ErrorPage } from "../pages/ErrorPage";
import { Dashboard } from "../pages/Dashboard_/Dashboard";
import { createBrowserRouter } from "react-router-dom";

const getPathname = () => {
  if (window.location.pathname.indexOf("/dashboard") === 0) {
    return `/dashboard`;
  }
};
export const BASE_PATH = getPathname();

export const router = createBrowserRouter([
  {
    path: `${BASE_PATH}`,
    element: <Sidebar />,
    children: [
      {
        path: `${BASE_PATH}`,
        element: <Dashboard />,
      },
      {
        path: `${BASE_PATH}/plugins`,
        element: <Plugins />,
      },
      {
        path: `${BASE_PATH}/commands`,
        element: <Commands />,
      },
      {
        path: `${BASE_PATH}/logs`,
        element: <Logs />,
      },
    ],
  },
  {
    path: `*`,
    element: <ErrorPage />,
  },
]);
