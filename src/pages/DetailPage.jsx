import React from "react";
import { useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import { getNote } from "../utils/local-data";
import PageNotFound from "./PageNotFound";

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={id} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNote(props.id),
    };
  }

  render() {
    if (this.state.notes !== undefined) {
      return (
        <section className="flex justify-center items-center h-screen">
          <NoteDetail {...this.state.notes} />
          {console.log(this.state.notes.id)}
        </section>
      );
    }
    return <PageNotFound />;
  }
}

export default DetailPageWrapper;
