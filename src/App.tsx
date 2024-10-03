import Header from "./components/Header";
import ViewPort from "./components/ViewPort";
import Notelist from "./components/NoteList";

//interface types
import { Notes } from "./types";

//events
import Form from "./events/Form";

{/* css */}
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
      id: note.length+1,
      title,
      content,
    };
    setNewNote([...note, newNote]);
  };

  const [isViewClicked,setViewClicked] = useState(false)
  const onViewClicked = () =>{
    setViewClicked(!isViewClicked)
  }

  const deleteNote = (id:number) =>{
    setNewNote(note.filter(note=>note.id !== id))
  }

  return (
    <div className="font-poppins">
      <Header onClick={onSubmitClick} onViewCLicked={onViewClicked} viewClicked={isViewClicked} />
      {showForm && (
        <Form
          onFormSubmit={(title, content) => addNote(title, content)}
          onClose={onCloseForm}
        />
      )}
      <ViewPort />
      {isViewClicked && <Notelist notes={note} deleteNote={deleteNote}/>}
    </div>
  );
}

export default App;
