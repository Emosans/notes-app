import Header from "./components/Header";
import ViewPort from "./components/ViewPort";

//interface types
import { Notes } from "./types";

//events
import Form from "./events/Form";
import "./App.css";
import { useState } from "react";

function App() {
  {
    /* click button logic to show form*/
  }
  const [showForm, setShowForm] = useState(false);
  const onSubmitClick = () => {
    setShowForm(true);
  };

  {
    /* close the form */
  }
  const onCloseForm = () => {
    setShowForm(false);
  };

  {
    /* add new note*/
  }
  const [note, setNewNote] = useState<Notes[]>([]);
  const addNote = (title: string, content: string) => {
    console.log(note);
    const newNote = {
      title,
      content,
    };
    setNewNote([...note, newNote]);
  };

  return (
    <>
      <Header onClick={onSubmitClick} />
      {showForm && (
        <Form
          onFormSubmit={(title, content) => addNote(title, content)}
          onClose={onCloseForm}
        />
      )}
      <ViewPort />
    </>
  );
}

export default App;
