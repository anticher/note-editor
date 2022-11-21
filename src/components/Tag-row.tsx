import { MouseEvent } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import LabelIcon from "@mui/icons-material/Label";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { ITag } from "../data/data";

type TagRowPropsType = {
  tag: ITag;
};

function TagRow({ tag }: TagRowPropsType) {
  const handleDeleteButtonClick = (e: MouseEvent) => {
    console.log("delete tag");
    console.log(tag.id)
  };
  return (
    <ListItem component="div" disablePadding>
      <ListItemButton
        onClick={(e) => {
          console.log("filter by this tag");
        }}
      >
        <LabelIcon sx={{ mr: 1, color: "primary.main" }} />
        <ListItemText primary={tag.value} />
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
