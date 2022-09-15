import React, { Component } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";

const InputNotesWrapper = () => {
  const navigate = useNavigate();

  return <InputNotes navigate={navigate} />;
};

class InputNotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.titleHandler = this.titleHandler.bind(this);
    this.bodyHandler = this.bodyHandler.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  titleHandler(e) {
    this.setState(() => {
      return {
        title: e.target.innerHTML,
      };
    });
  }

  bodyHandler(e) {
    this.setState(() => {
      return {
        body: e.target.innerHTML,
      };
    });
  }

  handleInput() {
    addNote(this.state);

    alert(`Catatan ${this.state.title} Berhasil ditambahkan`);
    this.props.navigate("/");
  }

  render() {
    return (
      <>
        <div
          className="border-2 border-secondary cursor-text py-2 px-4 rounded-lg bg-tertiary focus:bg-neutral"
          data-placeholder="Judul Catatan..."
          contentEditable
          onInput={this.titleHandler}
        />
        <div
          className="border-2 h-80 mt-4 border-secondary cursor-text py-2 px-4 rounded-lg bg-tertiary focus:bg-neutral"
          data-placeholder="Isi Catatan..."
          contentEditable
          onInput={this.bodyHandler}
        />
        <div className="flex justify-center mt-4">
          <button
            onClick={this.handleInput}
            className="w-full py-2 bg-primary hover:bg-secondary transition-all rounded-lg hover:scale-y-110 active:scale-95 text-neutral"
          >
            Submit
          </button>
        </div>
      </>
    );
  }
}

InputNotes.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default InputNotesWrapper;
