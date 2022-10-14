import { Dashboard } from "../pages/Dashboard_/Dashboard";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { ErrorPage } from "../pages/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import { Plugins } from "../pages/Plugins_/Plugins";
import { Logs } from "../pages/Logs_/Logs";
import { Commands } from "../pages/Commands_/Commands";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/plugins",
        element: <Plugins />,
      },
      {
        path: "/commands",
        element: <Commands />,
      },
      {
        path: "/logs",
        element: <Logs />,
      },
    ],
  },
]);