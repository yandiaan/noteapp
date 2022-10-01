import React, { useState, useEffect, useContext } from "react";

import { getArchivedNotes } from "../utils/network-data";

import NoteSection from "../components/NoteSection";
import SearchBar from "../components/SearchBar";
import LocaleContext from "../context/LocaleContext";
import ReactLoading from "react-loading";

const ArchivePage = () => {
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(true);

  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    getArchivedNotes().then(({ data }) => {
      setNotes(data);
      setLoading(false);
    });
  }, []);

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
  };

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <h1 className="text-4xl text-center mb-12 font-bold">
        {locale === "en" ? "Archive Note" : "Arsip Catatan"}
      </h1>
      {loading ? (
        <div className="flex w-full justify-center items-center">
          <ReactLoading
            type={"spinningBubbles"}
            color={"#fff"}
            height={200}
            width={200}
          />
        </div>
      ) : filteredNotes.length < 1 ? (
        <h1 className="text-center text-secondary text-xl font-semibold bg-neutral py-8 mb-80 drop-shadow-lg rounded-lg w-2/4 mx-auto">
          {locale === "en" ? "Nothing's here" : "Tidak ada data"}
        </h1>
      ) : (
        <NoteSection notes={filteredNotes} />
      )}
    </>
  );
};

export default ArchivePage;
