import { useContext } from "react";
import { ThemeContext } from "../context";

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  const onClickThemeMode = () => {
    setDarkTheme(!darkTheme);
    if (darkTheme === false) {
      localStorage.setItem("DARK_MODE", true);
    } else {
      localStorage.removeItem("DARK_MODE");
    }
  };
  return (
    <div>
      <button onClick={onClickThemeMode}>
        {darkTheme ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Header;
