export interface NoteItemAddDTO {
  title: string;
  details: string;
}

export interface NoteItemUpdateDTO {
  title: string;
  details: string;
  completed: boolean;
}

export interface NoteItemDTO {
  id: number;
  title: string;
  details: string;
  completed: boolean;
}
