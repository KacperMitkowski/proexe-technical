import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { Main } from "./components/main";
import { ThemeContext } from "./contexts/themeContext";

const App = () => {
  const [isDarkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => setDarkTheme((prevDarkTheme) => !prevDarkTheme);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ThemeContext.Provider>
  );
};

export default App;
