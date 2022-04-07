import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./page/Home";
import { darkMode, lightMode, GlobalStyle } from "./themeStyles";
import { ThemeContext } from "./context";
import { useState } from "react";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const [darkTheme, setDarkTheme] = useState(
    Boolean(localStorage.getItem("DARK_MODE"))
  );
  return (
    <HelmetProvider>
      <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
        <ThemeProvider theme={darkTheme ? darkMode : lightMode}>
          <GlobalStyle />
          <Router>
            <Routes>
              <Route path={"/"} element={<Home />}></Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </ThemeContext.Provider>
    </HelmetProvider>
  );
}

export default App;
