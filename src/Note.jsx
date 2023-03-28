import React from "react";
import "./index.css";
import { useState } from "react";

export default function Note(props) {
  let [isClicked, setToClick] = useState(false);
  let [newTC, setNewTC] = useState({
    newTitle: props.title,
    newContent: props.content,
  });
  //let [newContent, setNewContent] = useState(props.content);

  function deleteItem() {
    props.delete(props.id);
    setToClick(false);
  }

  function inEve(event) {
    let { name, value } = event.target;
    console.log("heloo");
    setNewTC((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function saveUpdate() {
  
    props.update(props.id, newTC);
    
    setToClick(false)
   
  }

  return (
    <>
      <div className="note">
        {isClicked ? (
          <>
            <input
              type="text"
              value={newTC.newTitle}
              name="newTitle"
              onChange={inEve}
            />
            <input
              type="text"
              value={newTC.newContent}
              name="newContent"
              onChange={inEve}
            />
          </>
        ) : (
          <>
            <h1>{props.title}</h1>
            <br />
            <p>{props.content}</p>
          </>
        )}

        <button className="btn" onClick={deleteItem}>
          ✖
        </button>

        <button
          className="btn"
          style={{ fontWeight: "bold" }}
          onClick={() => {
            setToClick(!isClicked);
          }}
        >
          🖊
        </button>

        {isClicked ? (
          <button className="btn" onClick={saveUpdate}>
            📩
          </button>
        ) : null}
      </div>
    </>
  );
}
