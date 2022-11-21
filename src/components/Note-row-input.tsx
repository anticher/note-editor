import styles from "./Note-row-input.module.scss";
import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { useAppSelector } from "../app/app-hooks";

type NoteRowInputPropsType = {
  noteId: number;
  editMode: boolean;
  editValue: string;
  setEditValue: Dispatch<SetStateAction<string>>;
};

function NoteRowInput({
  noteId,
  editMode,
  editValue,
  setEditValue,
}: NoteRowInputPropsType) {
  const notesData = useAppSelector((state) => state.notes);
  const currentNote =
    notesData.notes[notesData.notes.findIndex((note) => note.id === noteId)];

  const handleUpdateInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const text = e.target.value;
    setEditValue(text);
  };

  const showTextWithHighlightedTags = (text: string) => {
    const textArr = text.split(" ").join(', ').split(",");
    const highlightedSpansArr = textArr.map((word, index) =>
      word.trim().startsWith("#") && word.trim().length > 2 ? (
        <span className={styles.highlighted} key={word + index}>{word}</span>
      ) : (
        <span key={word + index}>{word}</span>
      )
    );
    return highlightedSpansArr
  };

  return (
    <Box sx={{ mr: 1, width: "100%" }}>
      {editMode ? (
        <div className={styles.wrapper}>
          <div className={styles.renderer}>
            {showTextWithHighlightedTags(editValue)}
          </div>
          <TextField
            className={styles.input}
            sx={{
              width: "100%",
              wordBreak: "break-word",
              whiteSpace: "pre-wrap",
            }}
            multiline
            variant="standard"
            value={editValue}
            InputProps={{ disableUnderline: true }}
            onChange={(e) => handleUpdateInputChange(e)}
          />
        </div>
      ) : (
        <ListItemText primary={currentNote.value} />
      )}
    </Box>
  );
}

export default NoteRowInput;
