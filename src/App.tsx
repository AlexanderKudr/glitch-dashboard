import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard_/Dashboard";
import { Plugins } from "./pages/Plugins_/Plugins";
import { Commands } from "./pages/Commands_/Commands";
import { Logs } from "./pages/Logs_/Logs";
import { useTheme } from "./hooks/useTheme";
import "bulma/css/bulma.css";

export const App = () => {
  const { themes, currentTheme } = useTheme();
  return (
    <>
      <h1>Put Sidebar here</h1>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/plugins" element={<Plugins />} />
        <Route path="/commands" element={<Commands />} />
        <Route path="/logs" element={<Logs />} />
      </Routes>
    </>
  );
};
