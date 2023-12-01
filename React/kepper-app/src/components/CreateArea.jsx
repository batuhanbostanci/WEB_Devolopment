import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handelChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function sumbitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handelChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handelChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={sumbitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
