import React, { useContext } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import { showFormattedDate } from "../utils/index";
import LocaleContext from "../context/LocaleContext";

const NoteCard = ({ id, title, body, createdAt }) => {
  const { locale } = useContext(LocaleContext);
  return (
    <div className="py-4 w-64 px-6 rounded-xl bg-neutral dark:bg-tertiary drop-shadow-lg flex flex-col justify-between">
      <div>
        <Link
          to={`/notes/${id}`}
          className="text-xl font-bold hover:text-secondary cursor-pointer block"
        >
          {title}
        </Link>
        <span className="italic mb-4 block">
          {showFormattedDate(createdAt, locale)}
        </span>
        <p>{body.length <= 100 ? body : `${body.substring(0, 100)}...`}</p>
      </div>
      <div>
        <Link
          to={`/notes/${id}`}
          className=" mt-4 font-bold hover:underline block"
        >
          {locale === "en" ? "Read More" : "Baca Selengkapnya"}
        </Link>
      </div>
    </div>
  );
};

NoteCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string,
};

export default NoteCard;
