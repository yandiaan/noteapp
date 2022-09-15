import React from "react";

import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import NewNotePage from "./pages/NewNotePage";
import ArchivePage from "./pages/ArchivePage";
import PageNotFound from "./pages/PageNotFound";

import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="flex">
      <Sidebar />
      <section className="ml-auto w-3/4 h-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="/notes/new" element={<NewNotePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
