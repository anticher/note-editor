import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Divider from "@mui/material/Divider";
import { useAppSelector } from "../app/app-hooks";
import NoteRow from "./Note-row";

function NotesList() {
  const notesData = useAppSelector((state) => state.notes);

  const content = (
    <List
      sx={{
        p: 1,
        bgcolor: "background.paper",
        overflow: "auto",
        backgroundColor: "transparent",
        border: 1,
        borderRadius: "4px",
        borderColor: "rgba(0, 0, 0, 0.23)",
        ":hover": {
          borderColor: "rgba(0, 0, 0, 0.87)",
        },
      }}
    >
      {notesData.notes.map((note, index) => (
        <Box key={note.id}>
          {index ? <Divider /> : null}
          <NoteRow note={note} />
        </Box>
      ))}
    </List>
  );

  const noItemsAlert = (
    <Alert variant="outlined" severity="info">
      No notes
    </Alert>
  );

  return (
    <Box>
      <Typography variant="h2" gutterBottom fontSize={24}>
        Notes
      </Typography>
      {notesData.notes.length ? content : noItemsAlert}
    </Box>
  );
}

export default NotesList;
