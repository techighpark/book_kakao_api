import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { HelmetProvider } from "react-helmet-async";
import { ThemeContext } from "./context";
import { darkMode, lightMode, GlobalStyle } from "./themeStyles";
import Home from "./page/Home";
import BookList from "./page/Books";

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
              <Route path={"/search/:query"} element={<BookList />}></Route>
              <Route path={"/search/*"}></Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </ThemeContext.Provider>
    </HelmetProvider>
  );
}

export default App;
