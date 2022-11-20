import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function NoteInput() {
  return (
    <Box sx={{ p: 2, display: "flex" }}>
      <Box sx={{ m: 1, width: "100%" }}>
        <TextField fullWidth label="New note" multiline />
      </Box>
      <Box sx={{ m: 1, display: "flex", alignItems: "flex-end" }}>
        <Button variant="contained">Add</Button>
      </Box>
    </Box>
  );
}

export default NoteInput;
