import React, { useContext } from "react";
import PropTypes from "prop-types";
import LocaleContext from "../context/LocaleContext";

function SearchBar({ keyword, keywordChange }) {
  const { locale } = useContext(LocaleContext);
  return (
    <div className="w-11/12 mx-auto my-12">
      <input
        className="w-full rounded-lg py-2 px-4 outline-none bg-primary focus:bg-neutral text-white focus:text-black"
        type="text"
        placeholder={
          locale === "en" ? "Search by title" : "Cari berdasarkan judul"
        }
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </div>
  );
}

SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
