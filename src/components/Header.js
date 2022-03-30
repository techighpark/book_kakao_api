const Header = ({ setThemeMode }) => {
  const changeThemeMode = e => {
    switch (e.target.innerText) {
      case "Dark":
        e.target.innerText = "Light";
        setThemeMode("dark");
        break;
      case "Light":
        e.target.innerText = "Dark";
        setThemeMode("light");
        break;
      default:
        break;
    }
  };
  const testThemeChange = chageFunc => e => {
    if (e.target.innerText !== "Dark" || e.target.innerText !== "Light") {
      return;
    }
    return chageFunc(e);
  };

  return (
    <div>
      <button onClick={e => testThemeChange(changeThemeMode(e))}>Dark</button>
    </div>
  );
};

export default Header;
