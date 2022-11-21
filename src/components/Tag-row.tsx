import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import LabelIcon from "@mui/icons-material/Label";
import IconButton from "@mui/material/IconButton";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { deleteTag, setFilter } from "../app/notes/notes.slice";
import { useAppDispatch } from "../app/app-hooks";

type TagRowPropsType = {
  tag: string;
};

function TagRow({ tag }: TagRowPropsType) {
  const dispatch = useAppDispatch();

  const handleSetFilterClick = () => {
    dispatch(setFilter(tag));
  };

  const handleDeleteButtonClick = () => {
    dispatch(deleteTag(tag));
  };
  return (
    <ListItem component="div" disablePadding>
      <LabelIcon sx={{ mr: 1 }} color="primary" />
      <ListItemText primary={tag} />
      <IconButton color="primary" onClick={handleSetFilterClick}>
        <FilterAltIcon />
      </IconButton>
      <IconButton color="primary" onClick={handleDeleteButtonClick}>
        <DeleteForeverIcon />
      </IconButton>
    </ListItem>
  );
}

export default TagRow;
