import { useEffect, useState } from "react";
import { loadTheme, saveTheme } from "../../utils/themeStorage";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = loadTheme();
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      saveTheme("dark");
    } else {
      root.classList.remove("dark");
      saveTheme("light");
    }
  }, [isDark]);

  return (
    <button
      className="p-2 bg-gray-200 rounded-full dark:bg-gray-800 dark:text-white text-sm"
      onClick={() => setIsDark((prev) => !prev)}
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

export default ThemeToggle;
