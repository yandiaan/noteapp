import React from "react";
import { deleteNote, archiveNote, unarchiveNote } from "../utils/network-data";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";

const ActionButton = ({ id, title }) => {
  const navigate = useNavigate();

  const handleAction = () => {
    if (title === "Delete") {
      deleteNote(id)
        .then(() => {
          alert("delete successful");
          navigate("/");
        })
        .catch(() => {
          alert("delete failed");
        });
    } else if (title === "Archive") {
      let confirmArchive = window.confirm("pindahkan catatan ke arsip?");
      if (confirmArchive) {
        archiveNote(id)
          .then(() => {
            alert("note archived");
            navigate("/");
          })
          .catch(() => {
            alert("failed to archive");
          });
        let confirmNavigate = window.confirm("mau beralih ke halaman arsip?");
        if (confirmNavigate) {
          navigate("/archive");
        } else {
          navigate("/");
        }
      }
    }
  };

  return (
    <button
      onClick={handleAction}
      className={`${
        title === "Delete"
          ? "bg-red-700 hover:bg-red-900 rounded-tl-none rounded-bl-none"
          : "bg-primary hover:bg-secondary rounded-tr-none rounded-br-none"
      } text-white py-2 px-4 rounded-xl w-1/2`}
    >
      {title}
    </button>
  );
};

ActionButton.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default ActionButton;
