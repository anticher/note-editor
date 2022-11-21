import Box from "@mui/material/Box";
import List from "@mui/material/List";
import TagRow from "./Tag-row";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../app/app-hooks";

function TagsList() {
  const notesData = useAppSelector((state) => state.notes);

  if (!notesData.tags.length) return null
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h2" gutterBottom fontSize={24}>
        Tags
      </Typography>
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
        {notesData.tags.map((tag) => <TagRow key={tag.id} tag={tag} />)}
      </List>
    </Box>
  );
}

export default TagsList;
