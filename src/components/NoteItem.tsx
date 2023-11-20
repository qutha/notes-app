import { FC } from "react";
import { NoteItemDTO } from "../dtos";
import { Dropdown } from "react-bootstrap";

export interface NoteItemProps {
  note: NoteItemDTO;
  onDelete: (id: number) => void;
  onComplete: (todo: NoteItemDTO) => void;
}

export const NoteItem: FC<NoteItemProps> = (todoItemProps) => {
  const note = todoItemProps.note;
  const onDelete = todoItemProps.onDelete;
  const onComplete = todoItemProps.onComplete;

  const onDeleteClick = () => {
    onDelete(note.id);
  };

  const onCompleteClick = () => {
    onComplete(note);
  };

  const cardClassName = `card px-3 py-2 mb-4 ${
    note.completed ? "border-success" : ""
  }`;
  return (
    <>
      <div className={cardClassName}>
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-start">
            <h4>{note.title}</h4>
          </div>

          <div className="text-end">
            <Dropdown>
              <Dropdown.Toggle
                variant="outline-secondary"
                size="sm"
                id="dropdown-note-actions"
              ></Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={onCompleteClick}>
                  Отметить как {note.completed ? "не" : ""} выполненное
                </Dropdown.Item>
                <Dropdown.Item onClick={onDeleteClick} className="text-danger">
                  Удалить
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <p>{note.details}</p>
      </div>
    </>
  );
};
