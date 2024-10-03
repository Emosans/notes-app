import { Notes } from "../types";

interface NoteList {
  notes: Notes[];
  deleteNote: (id: number) => void;
}

function Notelist({ notes, deleteNote }: NoteList) {
  {
    /* list view of notes */
  }
  return (
    <div className="w-full ">
      <div className="flex flex-col justify-between items-center w-full h-full">
        <div className="grid md:grid-cols-3 gap-4 w-full mt-10 pl-10">
          {notes.length > 0 ? (
            notes.map((note, index) => (
              <div
                key={index}
                className="shadow-xl w-96 h-58 bg-white rounded p-4"
              >
                <h1 className="text-2xl text-center mb-2">{note.title}</h1>
                <p className="w-full h-36 text-1xl">{note.content}</p>
                <div className="flex justify-end">
                  <button
                    className="h-8 bg-red-400 px-2 rounded"
                    onClick={() => deleteNote(note.id)}
                  >
                    Delete Note
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No notes added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Notelist;
