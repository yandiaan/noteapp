import React, { useContext } from "react";
import { deleteNote, archiveNote, unarchiveNote } from "../utils/network-data";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";
import LocaleContext from "../context/LocaleContext";

const ActionButton = ({ id, title }) => {
  const navigate = useNavigate();

  const { locale } = useContext(LocaleContext);

  const handleAction = (e) => {
    switch (e.target.getAttribute("data-action")) {
      case ("Delete", "Hapus"):
        deleteNote(id)
          .then(() => {
            alert(locale === "en" ? "delete success" : "sukses hapus catatan");
            navigate("/");
          })
          .catch(() => {
            alert(locale === "en" ? "delete failed" : "gagal hapus catatan");
          });
        break;
      case ("Archive", "Arsipkan"):
        archiveNote(id)
          .then(() => {
            alert(locale === "en" ? "note archived" : "catatan diarsipkan");
            navigate("/");
          })
          .catch(() => {
            alert(
              locale === "en"
                ? "failed to archive"
                : "gagal mengarsipkan catatan"
            );
          });
        break;
      case ("Unarchive", "Keluarkan"):
        unarchiveNote(id)
          .then(() => {
            alert(
              locale === "en"
                ? "note unarchive"
                : "catatan dikeluarkan dari arsip"
            );
            navigate("/");
          })
          .catch(() => {
            alert(
              locale === "en"
                ? "failed to unarchive"
                : "gagal mengeluarkan catatan"
            );
          });
        break;
      default:
        alert(locale === "en" ? "nothing to act" : "tidak terjadi apa apa");
        break;
    }
  };

  return (
    <button
      data-action={title}
      onClick={handleAction}
      className={`${
        title === "Delete" || title === "Hapus"
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
