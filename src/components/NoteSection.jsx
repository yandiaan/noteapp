import React from "react";

import PropTypes from "prop-types";

import NoteCard from "./NoteCard";

const NoteSection = ({ notes }) => {
  return (
    <div className="flex flex-wrap gap-8 justify-center mb-12 px-3">
      {notes.map((note) => {
        return <NoteCard key={note.id} {...note} />;
      })}
    </div>
  );
};

NoteSection.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
};

export default NoteSection;
