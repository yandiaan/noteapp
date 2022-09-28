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

function App() {
  const [authedUser, setAuthedUser] = useState(null);
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
    const fetchData = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
    };
    fetchData();
  });

  if (authedUser === null) {
    return (
      <Routes>
        <Route path="/*" element={<LoginPage auth={setAuthedUser} />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    );
  } else {
    return (
      <main className="flex">
        <Sidebar />
        <section className="ml-auto w-3/4 h-full">
          <Routes>
            {route.map(({ path, component }) => {
              return <Route key={path} path={path} element={component} />;
            })}
          </Routes>
        </section>
      </main>
    );
  }
}

export default App;
