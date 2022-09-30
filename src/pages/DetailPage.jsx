import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import { getNote } from "../utils/network-data";
import PageNotFound from "./PageNotFound";

const DetailPage = () => {
  const { id } = useParams();

  const [note, setNote] = useState({});

  useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
    });
  }, [id]);

  if (note !== null) {
    return (
      <section className="flex justify-center items-center h-screen">
        <NoteDetail {...note} />
      </section>
    );
  } else {
    return <PageNotFound />;
  }
};

export default DetailPage;
