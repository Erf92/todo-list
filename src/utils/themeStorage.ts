// src/utils/themeStorage.ts

const THEME_KEY = "theme";

export const loadTheme = (): "light" | "dark" | null => {
  return localStorage.getItem(THEME_KEY) as "light" | "dark" | null;
};

export const saveTheme = (theme: "light" | "dark") => {
  localStorage.setItem(THEME_KEY, theme);
};
