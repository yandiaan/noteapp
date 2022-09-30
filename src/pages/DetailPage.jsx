import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import { getNote } from "../utils/network-data";
import PageNotFound from "./PageNotFound";
import ReactLoading from "react-loading";

const DetailPage = () => {
  const { id } = useParams();

  const [note, setNote] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="flex w-full h-screen justify-center items-center">
        <ReactLoading
          type={"spinningBubbles"}
          color={"#fff"}
          height={200}
          width={200}
        />
      </div>
    );
  } else if (note !== null) {
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
