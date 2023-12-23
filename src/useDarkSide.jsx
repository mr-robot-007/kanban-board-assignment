import { useState, useEffect } from "react";

export default function useDarkSide() {
  const [theme, setTheme] = useState(localStorage.getItem("_theme"));
  console.log("theme", theme);
  const colorTheme = theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", theme);
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
     localStorage.setItem("_theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
