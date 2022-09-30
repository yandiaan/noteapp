import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LocaleContext from "../context/LocaleContext";
import { addNote } from "../utils/network-data";

const InputNotesWrapper = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { locale } = useContext(LocaleContext);

  const navigate = useNavigate();

  const titleHandler = (e) => {
    setTitle(e.target.innerHTML);
  };

  const bodyHandler = (e) => {
    setBody(e.target.innerHTML);
  };

  const handleInput = () => {
    try {
      if (title === "")
        throw new Error(
          locale === "en" ? "Title is Empty" : "Judul Catatan Kosong"
        );
      if (body === "")
        throw new Error(
          locale === "en" ? "Body is Empty" : "Isi Catatan Kosong"
        );
      addNote({ title, body }).catch((error) => {
        alert(error);
      });
      alert(
        locale === "en"
          ? `Note ${title} success to add`
          : `Catatan ${title} Berhasil ditambahkan`
      );
      navigate("/");
    } catch (e) {
      alert(e);
    }
  };

  return (
    <>
      <div
        className="border-2 border-secondary dark:text-black cursor-text py-2 px-4 rounded-lg bg-tertiary focus:bg-neutral"
        data-placeholder={
          locale === "en" ? "Note's Title..." : "Judul Catatan..."
        }
        contentEditable
        onInput={titleHandler}
      />
      <div
        className="border-2 h-80 mt-4 dark:text-black border-secondary cursor-text py-2 px-4 rounded-lg bg-tertiary focus:bg-neutral"
        data-placeholder={locale === "en" ? "Note's Body..." : "Isi Catatan..."}
        contentEditable
        onInput={bodyHandler}
      />
      <div className="flex justify-center mt-4">
        <button
          onClick={handleInput}
          className="w-full py-2 bg-primary dark:bg-secondary hover:bg-secondary transition-all rounded-lg hover:scale-y-110 active:scale-95 text-neutral"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default InputNotesWrapper;
