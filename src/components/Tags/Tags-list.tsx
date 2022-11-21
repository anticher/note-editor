import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import Alert from "@mui/material/Alert";
import TagRow from "./Tag-row";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import { useAppDispatch, useAppSelector } from "../../app/app-hooks";
import { resetFilter } from "../../app/notes/notes.slice";

function TagsList() {
  const notesData = useAppSelector((state) => state.notes);
  const dispatch = useAppDispatch();

  const handleResetFilterClick = () => {
    dispatch(resetFilter());
  };

  const content = (
    <List
      sx={{
        p: 1,
        bgcolor: "background.paper",
        overflow: "auto",
        maxHeight: 120,
        backgroundColor: "transparent",
        border: 1,
        borderRadius: "4px",
        borderColor: "rgba(0, 0, 0, 0.23)",
        ":hover": {
          borderColor: "rgba(0, 0, 0, 0.87)",
        },
      }}
    >
      {notesData.tags.map((tag, index) => (
        <Box key={tag}>
          {index ? <Divider /> : null}
          <TagRow tag={tag} />
        </Box>
      ))}
    </List>
  );

  const noTagsAlert = (
    <Alert variant="outlined" severity="info">
      No tags
    </Alert>
  );

  return (
    <Box sx={{ mb: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h2" gutterBottom fontSize={24}>
          Tags
        </Typography>
        <IconButton onClick={handleResetFilterClick}>
          <FilterAltOffIcon color="primary" />
        </IconButton>
      </Stack>
      {notesData.tags.length ? content : noTagsAlert}
    </Box>
  );
}

export default TagsList;
