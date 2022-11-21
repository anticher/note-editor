import { useContext } from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { DataContext } from "../data/data";

function NoteInput() {
  const [data, setters] = useContext(DataContext);
  const [text, setText] = useState("");

  const handleAddButtonClick = () => {
    setters.setNotes([...data.notes, {id: data.notes[data.notes.length - 1].id + 1, value: text}]);
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
