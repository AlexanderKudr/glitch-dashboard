import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard_/Dashboard";
import { Plugins } from "./pages/Plugins_/Plugins";
import { Commands } from "./pages/Commands_/Commands";
import { Logs } from "./pages/Logs_/Logs";
import { useTheme } from "./hooks/useTheme";
import { Sidebar } from "./components/Sidebar/Sidebar";
import "bulma/css/bulma.css";
import "./App.scss";
import "./sass/utils/helpers.scss";

export const App = () => {
  
  const { themes, currentTheme } = useTheme();

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/plugins" element={<Plugins />} />
          <Route path="/commands" element={<Commands />} />
          <Route path="/logs" element={<Logs />} />
        </Route>
      </Routes>
    </div>
  );
};
