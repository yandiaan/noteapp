import React, { useState, useEffect } from "react";

import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import NewNotePage from "./pages/NewNotePage";
import ArchivePage from "./pages/ArchivePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PageNotFound from "./pages/PageNotFound";

import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import { getUserLogged } from "./utils/network-data";

import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [themeContext, setThemeContext] = useState({
    theme: localStorage.getItem("theme") || "light",
    toggleContext() {
      setThemeContext((prevState) => {
        let newTheme = prevState.theme === "light" ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
        return {
          ...prevState,
          theme: newTheme,
        };
      });
    },
  });
  const route = [
    {
      path: "/",
      component: <HomePage />,
    },
    {
      path: "/notes/:id",
      component: <DetailPage />,
    },
    {
      path: "/notes/new",
      component: <NewNotePage />,
    },
    {
      path: "/archive",
      component: <ArchivePage />,
    },
    {
      path: "*",
      component: <PageNotFound />,
    },
    {
      path: "/notes/*",
      component: <PageNotFound />,
    },
  ];

  useEffect(() => {
    if (themeContext.theme === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }

    const fetchAtiveUser = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
    };
    fetchAtiveUser();
  });

  if (authedUser === null) {
    return (
      <ThemeProvider value={themeContext}>
        <main className="dark:bg-secondary bg-tertiary min-h-screen">
          <Routes>
            <Route path="/*" element={<LoginPage auth={setAuthedUser} />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </ThemeProvider>
    );
  } else {
    return (
      <ThemeProvider value={themeContext}>
        <main className="flex dark:bg-secondary bg-tertiary min-h-screen">
          <Sidebar />
          <section className="ml-auto w-3/4 h-full">
            <Routes>
              {route.map(({ path, component }) => {
                return <Route key={path} path={path} element={component} />;
              })}
            </Routes>
          </section>
        </main>
      </ThemeProvider>
    );
  }
}

export default App;
