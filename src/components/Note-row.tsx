import { MouseEvent } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import BuildIcon from "@mui/icons-material/Build";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { deleteNote, INote } from "../app/notes/notes.slice";
import { useAppDispatch } from "../app/app-hooks";

type NoteRowPropsType = {
  note: INote;
};

function NoteRow({ note }: NoteRowPropsType) {
  const dispatch = useAppDispatch();

  const handleUpdateButtonClick = (e: MouseEvent) => {
    console.log("update note");
    console.log(note.id);
  };

  const handleDeleteButtonClick = (e: MouseEvent) => {
    dispatch(deleteNote(note.id));
    console.log("delete note");
    console.log(note.id);
  };
  return (
    <ListItem
      component="div"
      disablePadding
      sx={{ wordWrap: "break-word", whiteSpace: "pre-line" }}
    >
      <ListItemText sx={{ mr: 1 }} primary={note.value} />
      <IconButton
        onClick={(e) => {
          handleUpdateButtonClick(e);
        }}
      >
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
