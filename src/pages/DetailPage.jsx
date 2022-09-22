import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import { getNote } from "../utils/local-data";
import PageNotFound from "./PageNotFound";

const DetailPage = () => {
  const { id } = useParams();

  const [notes] = useState(getNote(id));

  if (notes !== undefined) {
    return (
      <section className="flex justify-center items-center h-screen">
        <NoteDetail {...notes} />
      </section>
    );
  }
  return <PageNotFound />;
};

export default DetailPage;
