import { useReducer, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { UsersList } from "./components/usersList";
import { CommonContext } from "./contexts";
import { ThemeContext } from "./contexts/themeContext";
import { initialState, commonReducer } from "./reducers";

const App = () => {
  const [globalState, dispatch] = useReducer(commonReducer, initialState);
  const [isDarkTheme, setDarkTheme] = useState<boolean>(false);
  const toggleTheme = () => setDarkTheme((prevDarkTheme) => !prevDarkTheme);

  return (
    <CommonContext.Provider value={{ globalState, dispatch }}>
      <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<UsersList />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </ThemeContext.Provider>
    </CommonContext.Provider>
  );
};

export default App;
