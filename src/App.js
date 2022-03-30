import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./page/Home";
import Header from "./components/Header";
import { darkMode, lightMode, GlobalStyle } from "./themeStyles";
import { useState } from "react";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  return (
    <ThemeProvider theme={themeMode === "light" ? lightMode : darkMode}>
      <GlobalStyle />
      <Header themeMode={themeMode} setThemeMode={setThemeMode} />
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
