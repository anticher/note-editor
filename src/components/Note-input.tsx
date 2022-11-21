import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useAppDispatch } from "../app/app-hooks";
import { addNewNote } from "../app/notes/notes.slice";

function NoteInput() {
  const dispatch = useAppDispatch();

  const [text, setText] = useState("");

  const handleAddButtonClick = () => {
    dispatch(addNewNote(text));
    setText("");
  };

  return (
    <Box sx={{ p: 2, display: "flex" }}>
      <Box sx={{ m: 1, width: "100%" }}>
        <TextField
          fullWidth
          label="New note"
          multiline
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </Box>
      <Box sx={{ m: 1, display: "flex", alignItems: "flex-end" }}>
        <Button
          variant="contained"
          onClick={handleAddButtonClick}
          disabled={!text.trim()}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
}

export default NoteInput;
