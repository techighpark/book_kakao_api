import { useContext } from "react";
import { ThemeContext } from "../context";

const useTheme = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  const onClickThemeMode = () => {
    setDarkTheme(!darkTheme);
    if (darkTheme === false) {
      localStorage.setItem("DARK_MODE", true);
    } else {
      localStorage.removeItem("DARK_MODE");
    }
  };

  return { darkTheme, onClickThemeMode };
};

export default useTheme;
