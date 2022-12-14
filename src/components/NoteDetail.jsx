import React, { useContext } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import { showFormattedDate } from "../utils";
import ActionButton from "./ActionButton";
import LocaleContext from "../context/LocaleContext";

const NoteDetail = ({ id, title, body, createdAt, archived }) => {
  const { locale } = useContext(LocaleContext);

  return (
    <div className="relative mx-12 rounded-xl bg-neutral dark:bg-tertiary w-[75%] drop-shadow-lg py-32 px-12">
      <Link
        to="/"
        className="absolute top-4 hover:text-tertiary hover:scale-110 active:scale-90 transition-all text-7xl"
      >
        &larr;
      </Link>
      <div className="absolute right-12 top-10">
        <ActionButton
          id={id}
          title={
            locale === "en"
              ? archived
                ? "Unarchive"
                : "Archive"
              : archived
              ? "Keluarkan"
              : "Arsipkan"
          }
        />
        <ActionButton id={id} title={locale === "en" ? "Delete" : "Hapus"} />
      </div>

      <h1 className="text-5xl font-bold">{title}</h1>
      <span className="block mt-2 mb-12">
        {showFormattedDate(createdAt, locale)}
      </span>
      <p>{body}</p>
    </div>
  );
};

NoteDetail.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string,
  archived: PropTypes.bool,
};

export default NoteDetail;
