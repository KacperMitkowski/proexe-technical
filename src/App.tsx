import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { UsersList } from "./components/usersList";
import { ThemeContext } from "./contexts/themeContext";

const App = () => {
  const [isDarkTheme, setDarkTheme] = useState<boolean>(false);
  const toggleTheme = () => setDarkTheme((prevDarkTheme) => !prevDarkTheme);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UsersList />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ThemeContext.Provider>
  );
};

export default App;
