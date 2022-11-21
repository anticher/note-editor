import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Alert from "@mui/material/Alert";
import TagRow from "./Tag-row";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../app/app-hooks";

function TagsList() {
  const notesData = useAppSelector((state) => state.notes);

  const content = (
    <List
        sx={{
          p: 1,
          bgcolor: "background.paper",
          overflow: "auto",
          maxHeight: 100,
          backgroundColor: "transparent",
          border: 1,
          borderRadius: "4px",
          borderColor: "rgba(0, 0, 0, 0.23)",
          ":hover": {
            borderColor: "rgba(0, 0, 0, 0.87)",
          },
        }}
      >
        {notesData.tags.map((tag) => <TagRow key={tag} tag={tag} />)}
      </List>
  );

  const noTagsAlert = (
    <Alert variant="outlined" severity="info">
      No tags
    </Alert>
  );


  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h2" gutterBottom fontSize={24}>
        Tags
      </Typography>
      {notesData.tags.length ? content : noTagsAlert}
    </Box>
  );
}

export default TagsList;
