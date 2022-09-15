import React, { Component } from "react";

import { getArchivedNotes } from "../utils/local-data";

import NoteSection from "../components/NoteSection";
import SearchBar from "../components/SearchBar";

class ArchivePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
      keyword: "",
    };
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });
    return (
      <>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <h1 className="text-4xl text-center mb-12 font-bold">Archive Note</h1>
        {this.state.notes.length < 1 ? (
          <h1 className="text-center text-secondary text-xl font-semibold bg-neutral py-8 mb-80 drop-shadow-lg rounded-lg w-2/4 mx-auto">
            Arsip Kosong
          </h1>
        ) : (
          <NoteSection notes={notes} />
        )}
      </>
    );
  }
}

export default ArchivePage;
