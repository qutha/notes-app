import { NoteItemAddDTO, NoteItemDTO } from "./dtos";

export default class NoteRepository {
  private get id(): number {
    return JSON.parse(localStorage.getItem("notesId")!);
  }

  private get notes(): NoteItemDTO[] {
    return JSON.parse(localStorage.getItem("notes")!);
  }

  private set notes(notes: NoteItemDTO[]) {
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  private getAndIncrementId(): number {
    const id = this.id;
    localStorage.setItem("notesId", JSON.stringify(id + 1));
    return id;
  }

  getById(id: number): NoteItemDTO | null {
    const notes: NoteItemDTO[] = JSON.parse(localStorage.getItem("notes")!);
    const note = notes.filter((note) => note.id === id)[0];
    return note;
  }

  get(offset: number, limit: number): NoteItemDTO[] {
    return this.notes.slice(offset, offset + limit).reverse();
  }

  add(note: NoteItemAddDTO): void {
    this.notes = [
      ...this.notes,
      {
        id: this.getAndIncrementId(),
        completed: false,
        ...note,
      },
    ];
  }

  delete(id: number): void {
    const updatedNotes = this.notes.filter((note) => note.id !== id);
    this.notes = updatedNotes;
  }

  update(note: NoteItemDTO): void {
    const notes = this.notes;
    const noteToUpdate = notes.filter((n) => n.id === note.id)[0];
    noteToUpdate.title = note.title;
    noteToUpdate.details = note.details;
    noteToUpdate.completed = note.completed;
    this.notes = notes;
  }
}
