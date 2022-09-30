import React, { useState, useEffect } from "react";

import { getActiveNotes } from "../utils/network-data";

import NoteSection from "../components/NoteSection";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });
  }, [notes]);

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
  };

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <h1 className="text-4xl text-center mb-12 font-bold">Active Note</h1>
      {filteredNotes.length < 1 ? (
        <h1 className="text-center text-secondary text-xl font-semibold bg-neutral py-8 mb-80 drop-shadow-lg rounded-lg w-2/4 mx-auto">
          Tidak ada data
        </h1>
      ) : (
        <NoteSection notes={filteredNotes} />
      )}
    </>
  );
};

export default HomePage;
