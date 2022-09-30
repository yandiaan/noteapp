import React, { useState, useEffect, useContext } from "react";

import { getActiveNotes } from "../utils/network-data";

import NoteSection from "../components/NoteSection";
import SearchBar from "../components/SearchBar";
import LocaleContext from "../context/LocaleContext";
import ReactLoading from "react-loading";

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(true);

  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
      setLoading(false);
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
      <h1 className="text-4xl text-center mb-12 font-bold">
        {locale === "en" ? "Active Note" : "Catatan Aktif"}
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
        <NoteSection notes={filteredNotes} loading={loading} />
      )}
    </>
  );
};

export default HomePage;
