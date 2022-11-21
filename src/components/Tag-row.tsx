import { MouseEvent } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import LabelIcon from "@mui/icons-material/Label";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { deleteTag } from "../app/notes/notes.slice";
import { useAppDispatch } from "../app/app-hooks";

type TagRowPropsType = {
  tag: string;
};

function TagRow({ tag }: TagRowPropsType) {
  const dispatch = useAppDispatch();
  
  const handleDeleteButtonClick = (e: MouseEvent) => {
    dispatch(deleteTag(tag));
  };
  return (
    <ListItem component="div" disablePadding>
      <ListItemButton
        onClick={(e) => {
          console.log("filter by this tag");
        }}
      >
        <LabelIcon sx={{ mr: 1, color: "primary.main" }} />
        <ListItemText primary={tag} />
      </ListItemButton>
      <Button
        onClick={(e) => {
          handleDeleteButtonClick(e);
        }}
      >
        <DeleteForeverIcon />
      </Button>
    </ListItem>
  );
}

export default TagRow;
