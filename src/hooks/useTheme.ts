import { useState, useEffect } from "react";
export const useTheme = () => {
  const themes = ["purple", "light"];
  const [currentTheme, setCurrentTheme] = useState(themes[0]);
  //cuttently only one theme, add more if needed and assing to a toggle/button
  useEffect(() => {
    document.body.className = currentTheme;
  }, [currentTheme]);

  const themeFunc = () => {
    currentTheme === themes[0]
      ? setCurrentTheme(themes[1])
      : setCurrentTheme(themes[0]);
  };
  return {
    currentTheme,
    themes,
    setCurrentTheme,
    themeFunc,
  };
};
