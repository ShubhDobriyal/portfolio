import { createContext, useState } from "react";

const ThemeContext = createContext({
  theme: "",
  switchTheme: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  let initialTheme;

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    initialTheme = "dark";
  } else {
    initialTheme = "light";
  }

  const [theme, setTheme] = useState(initialTheme);

  const themeSwitcher = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.theme = "light";
    } else {
      setTheme("dark");
      localStorage.theme = "dark";
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme: themeSwitcher }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
