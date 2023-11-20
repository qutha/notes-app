import NoteList from "./NoteList";
import { NoteInput } from "./NoteInput";
import NoteRepository from "../NoteRepository";
import { useEffect, useMemo, useState } from "react";
import { NoteItemAddDTO, NoteItemDTO } from "../dtos";

const App = () => {
  const OFFSET = 0;
  const LIMIT = 100;
  const noteRepository = useMemo(() => new NoteRepository(), []);
  const [notes, setNotes] = useState<NoteItemDTO[]>([]);

  useEffect(() => {
    if (localStorage.getItem("notes") === null) {
      localStorage.setItem("notes", JSON.stringify([]));
    }
    if (localStorage.getItem("notesId") === null) {
      localStorage.setItem("notesId", JSON.stringify(0));
    }
    setNotes(noteRepository.get(OFFSET, LIMIT));
    return () => {};
  }, [noteRepository]);

  const onAdd = (note: NoteItemAddDTO) => {
    noteRepository.add(note);
    setNotes(noteRepository.get(OFFSET, LIMIT));
  };

  const onDelete = (id: number) => {
    noteRepository.delete(id);
    setNotes(noteRepository.get(OFFSET, LIMIT));
  };

  const onComplete = (note: NoteItemDTO) => {
    note.completed = !note.completed;
    noteRepository.update(note);
    setNotes(noteRepository.get(OFFSET, LIMIT));
  };

  return (
    <>
      <div className="container mx-auto col-6">
        <h1 className="pt-4 text-center">Заметки</h1>
        <hr></hr>
        <NoteInput onAdd={onAdd} />
        <NoteList notes={notes} onDelete={onDelete} onComplete={onComplete} />
      </div>
    </>
  );
};

export default App;
