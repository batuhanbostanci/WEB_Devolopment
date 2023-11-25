import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />

      {notes.map((itemOfNotes) => {
        return (
          <Note
            key={itemOfNotes.key}
            title={itemOfNotes.title}
            content={itemOfNotes.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
