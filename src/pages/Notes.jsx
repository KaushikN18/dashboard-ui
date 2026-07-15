import NotesHeader from "../components/notes/NotesHeader";
import SearchBar from "../components/notes/SearchBar";
import NotesGrid from "../components/notes/NotesGrid";

function Notes() {
  return (
    <div className="space-y-6">

      <NotesHeader />

      <SearchBar />

      <NotesGrid />

    </div>
  );
}

export default Notes;