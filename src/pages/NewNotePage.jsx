import React, { useContext } from "react";
import InputNotes from "../components/InputNotes";
import LocaleContext from "../context/LocaleContext";

const NewNotePage = () => {
  const { locale } = useContext(LocaleContext);
  return (
    <div className="h-auto dark:text-white mx-12 my-6 p-8 dark:bg-primary bg-neutral drop-shadow-lg rounded-lg">
      <h1 className="text-center text-xl font-bold mb-8">
        {locale === "en" ? "Input New Note" : "Masukkan Catatan Baru"}
      </h1>
      <InputNotes />
    </div>
  );
};

export default NewNotePage;
