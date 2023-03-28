import React from "react";
import { useState } from "react";
import "./index.css";

export default function CreateNote(props) {
  let [expand, setExpand] = useState(false);
  let [note, setNote] = useState({
    title: "",
    content: "",
  });

  function inputEvent(eve) {
    let { name, value } = eve.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function addEvent(eve) {
    eve.preventDefault();
    if (!note.title || !note.content) {
      return alert("make a note");
    } else {
      props.passNote(note);

      setNote({
        title: "",
        content: "",
      });
      setExpand(false);
    }
  }

  function expandIt() {
    setExpand(true);
  }

  return (
    <>
      <div className="main_note">
        <form>
          {expand ? (
            <input
              type="text"
              value={note.title}
              name="title"
              onChange={inputEvent}
              placeholder="Title"
              autoComplete="off"
            />
          ) : null}
          <textarea
            rows=""
            column=""
            value={note.content}
            name="content"
            onChange={inputEvent}
            placeholder="write a note..."
            onClick={expandIt}
          ></textarea>

          {expand ? (
            <button className="plus_sign" onClick={addEvent}>
              ➕
            </button>
          ) : null}
        </form>
      </div>
    </>
  );
}
