import React, { Component } from "react";
import InputNotes from "../components/InputNotes";

class NewNotePage extends Component {
  render() {
    return (
      <div className="h-auto mx-12 my-6 p-8 bg-neutral drop-shadow-lg rounded-lg">
        <h1 className="text-center text-xl font-bold mb-8">Input New Note</h1>
        <InputNotes />
      </div>
    );
  }
}

export default NewNotePage;
