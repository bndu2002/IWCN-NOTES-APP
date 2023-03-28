import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote"
import Note from "./Note";
import { useState } from "react";



function App() {

  let [item, setItem] = useState([])

  function addItem(note) {
    setItem((prevItem) => {
      return [...prevItem, note]
    })

  }

  function deleteNote(id) {
    setItem((prevNote) => {
      return prevNote.filter((val, ind) => {
        return id !== ind
      })
    })
  }

  function editNote(id, newTc) {
     
  }



  return (
    <>
      <Header />
      <CreateNote passNote={addItem} />
      {
        item.map((val, ind) => {
          return <Note
            key={ind}
            id={ind}
            title={val.title}
            content={val.content}
            delete={deleteNote}
            edit={editNote}

          />
        })
      }
      <Footer />

    </>
  )
}

export default App;
