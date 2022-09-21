import { useState, useEffect } from "react";

export const useTheme = () => {
  const themes = ["purple"];
  const [currentTheme, setCurrentTheme] = useState(themes[0]);
//cuttently only one theme, add more if needed and assing to a toggle/button
  useEffect(() => {
    document.body.className = currentTheme;
  }, [currentTheme]);

  return {
    currentTheme,
    themes,
    setCurrentTheme,
  };
};