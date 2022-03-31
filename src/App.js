import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./page/Home";
import Header from "./components/Header";
import { darkMode, lightMode, GlobalStyle } from "./themeStyles";
import { ThemeContext } from "./context";
import { useState } from "react";

function App() {
  const [darkTheme, setDarkTheme] = useState(
    Boolean(localStorage.getItem("DARK_MODE"))
  );
  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <ThemeProvider theme={darkTheme ? darkMode : lightMode}>
        <GlobalStyle />
        <Header />
        <Router>
          <Routes>
            <Route path={"/"} element={<Home />}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
