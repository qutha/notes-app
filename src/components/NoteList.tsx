import { FC } from "react";
import { NoteItem } from "./NoteItem";
import { NoteItemDTO } from "../dtos";

interface NoteListProps {
  notes: NoteItemDTO[];
  onDelete: (id: number) => void;
  onComplete: (note: NoteItemDTO) => void;
}

const NoteList: FC<NoteListProps> = (noteListProps) => {
  const notes = noteListProps.notes;
  const onDelete = noteListProps.onDelete;
  const onComplete = noteListProps.onComplete;
  const noteList = notes.map((note) => (
    <NoteItem
      key={note.id}
      note={note}
      onDelete={onDelete}
      onComplete={onComplete}
    />
  ));

  return (
    <>
      <div>{noteList}</div>
    </>
  );
};

export default NoteList;
