import React from "react";

type ThemeContext = { isDarkTheme: boolean; toggleTheme: () => void };

export const ThemeContext = React.createContext<ThemeContext>(
  {} as ThemeContext
);
