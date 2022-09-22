import React, { useState } from "react";

import { getArchivedNotes } from "../utils/local-data";

import NoteSection from "../components/NoteSection";
import SearchBar from "../components/SearchBar";

const ArchivePage = () => {
  const [notes] = useState(getArchivedNotes());
  const [keyword, setKeyword] = useState("");

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
  };

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <h1 className="text-4xl text-center mb-12 font-bold">Archive Note</h1>
      {notes.length < 1 ? (
        <h1 className="text-center text-secondary text-xl font-semibold bg-neutral py-8 mb-80 drop-shadow-lg rounded-lg w-2/4 mx-auto">
          Arsip Kosong
        </h1>
      ) : (
        <NoteSection notes={filteredNotes} />
      )}
    </>
  );
};

export default ArchivePage;
