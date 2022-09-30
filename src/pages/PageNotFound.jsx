import React, { useContext } from "react";

import LocaleContext from "../context/LocaleContext";

const PageNotFound = () => {
  const { locale } = useContext(LocaleContext);

  return (
    <div className="flex flex-col mx-auto mt-16 justify-center items-center p-12 bg-neutral dark:bg-tertiary drop-shadow-lg rounded-lg text-center w-2/4">
      <img
        src="https://i.ibb.co/t8qhTzQ/Oops-404-Error-with-a-broken-robot-rafiki.png"
        alt="Oops-404-Error-with-a-broken-robot-rafiki"
        border="0"
        className="w-3/4"
      />
      <h1 className="text-3xl font-bold">
        404 - {locale === "en" ? "Page Not Found" : "Halaman Tidak Ditemukan"}
      </h1>
    </div>
  );
};

export default PageNotFound;
