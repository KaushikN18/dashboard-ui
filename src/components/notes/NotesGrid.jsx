import notes from "./notesData";
import NoteCard from "./NoteCard";

function NotesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
        />
      ))}

    </div>
  );
}

export default NotesGrid;