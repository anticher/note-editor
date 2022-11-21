import { MouseEvent, useState } from "react";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import BuildIcon from "@mui/icons-material/Build";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { addNewTag, deleteNote, updateNote } from "../app/notes/notes.slice";
import { useAppDispatch, useAppSelector } from "../app/app-hooks";
import NoteRowInput from "./Note-row-input";

function NoteRow({ noteId }: { noteId: number }) {
  const notesData = useAppSelector((state) => state.notes);
  const [editMode, setEditMode] = useState(false);
  const dispatch = useAppDispatch();
  const currentNote =
    notesData.notes[notesData.notes.findIndex((note) => note.id === noteId)];

  const [editValue, setEditValue] = useState(currentNote.value);

  const handleUpdateButtonClick = () => {
    if (!editMode) {
      setEditMode(!editMode);
    } else {
      dispatch(updateNote({ id: currentNote.id, text: editValue }));
      const editValueArr = editValue.split(" ");
      const newTags = editValueArr.filter(
        (word) => word.startsWith("#") && word.length > 2
      );
      newTags.forEach((tag) => {
        dispatch(addNewTag(tag));
      });
      setEditMode(!editMode);
    }
  };

  const handleDeleteButtonClick = (e: MouseEvent) => {
    dispatch(deleteNote(currentNote.id));
  };
  return (
    <ListItem
      component="div"
      disablePadding
      sx={{ wordWrap: "break-word", whiteSpace: "pre-line" }}
    >
      <NoteRowInput
        noteId={noteId}
        editMode={editMode}
        editValue={editValue}
        setEditValue={setEditValue}
      />

      <IconButton onClick={handleUpdateButtonClick}>
        <BuildIcon color="primary" />
      </IconButton>
      <IconButton
        onClick={(e) => {
          handleDeleteButtonClick(e);
        }}
      >
        <DeleteForeverIcon color="primary" />
      </IconButton>
    </ListItem>
  );
}

export default NoteRow;
