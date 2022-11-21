import { useContext } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import TagRow from "./Tag-row";
import Typography from "@mui/material/Typography";
import { DataContext } from "../data/data";

function TagsList() {
  const [data, setters] = useContext(DataContext);

  if (!data.tags.length) return null
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
        {data.tags.map((tag) => <TagRow key={tag.id} tag={tag} />)}
      </List>
    </Box>
  );
}

export default TagsList;
