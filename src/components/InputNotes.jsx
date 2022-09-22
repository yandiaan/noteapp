import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";

const InputNotesWrapper = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const bodyHandler = (e) => {
    setBody(e.target.value);
  };

  const handleInput = () => {
    addNote({ title, body });

    alert(`Catatan ${title} Berhasil ditambahkan`);
    navigate("/");
  };

  return (
    <>
      <div
        className="border-2 border-secondary cursor-text py-2 px-4 rounded-lg bg-tertiary focus:bg-neutral"
        data-placeholder="Judul Catatan..."
        contentEditable
        onInput={titleHandler}
      />
      <div
        className="border-2 h-80 mt-4 border-secondary cursor-text py-2 px-4 rounded-lg bg-tertiary focus:bg-neutral"
        data-placeholder="Isi Catatan..."
        contentEditable
        onInput={bodyHandler}
      />
      <div className="flex justify-center mt-4">
        <button
          onClick={handleInput}
          className="w-full py-2 bg-primary hover:bg-secondary transition-all rounded-lg hover:scale-y-110 active:scale-95 text-neutral"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default InputNotesWrapper;
