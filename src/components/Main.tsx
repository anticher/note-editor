import { Container } from "@mui/system";
import NoteInput from "./Notes/Note-input";
import TagsList from "./Tags/Tags-list";
import NotesList from "./Notes/Notes-list";

function Main() {
  return (
    <Container maxWidth="sm">
      <NoteInput />
      <TagsList />
      <NotesList />
    </Container>
  );
}

export default Main;
