import useTheme from "../hooks/useTheme";

const Header = () => {
  const { darkTheme, onClickThemeMode } = useTheme();
  return (
    <div>
      <button onClick={onClickThemeMode}>
        {darkTheme ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Header;
