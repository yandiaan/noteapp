import React from "react";

import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import NewNotePage from "./pages/NewNotePage";
import ArchivePage from "./pages/ArchivePage";
import PageNotFound from "./pages/PageNotFound";

import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
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

export default App;
