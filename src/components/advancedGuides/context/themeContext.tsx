import React from "react";

export const themes = {
  light: {
    foreground: "#ff0000",
    background: "#00ff00",
  },
  dark: {
    foreground: "#00ffff",
    background: "#00ffff",
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark, // 默认值
  // context 更新注入
  toggleTheme: () => {},
});

export const UserContext = React.createContext({
  name: 'Guest',
});

