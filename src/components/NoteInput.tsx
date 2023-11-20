import { FC, useState } from "react";
import { NoteItemAddDTO } from "../dtos";

export interface NoteInputProps {
  onAdd: (note: NoteItemAddDTO) => void;
}

export const NoteInput: FC<NoteInputProps> = (noteInputProps) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const onAdd = noteInputProps.onAdd;

  const onAddClick = () => {
    setTitle(title.trim());
    setDetails(details.trim());
    onAdd({
      title,
      details,
    });
    setTitle("");
    setDetails("");
  };

  const isButtonDisabled = () => {
    return title.trim() === "" || details.trim() === "";
  };

  return (
    <>
      <div className="px-3 py-2 mb-4">
        <input
          name="title"
          className="form-control mb-2"
          type="text"
          placeholder="Заголовок"
          aria-label="Заголовок"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          name="details"
          className="form-control mb-2"
          placeholder="Описание"
          aria-label="Описание"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <div className="d-flex flex-row-reverse">
          <button
            disabled={isButtonDisabled()}
            className="btn btn-primary"
            onClick={onAddClick}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};
