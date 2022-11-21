import "./App.scss";
import { Container } from "@mui/system";
import NoteInput from "./components/Note-input";
import TagsList from "./components/Tags-list";
import NotesList from "./components/Notes-list";

function App() {
  return (
    <div className="App">
        <header className="App__header">123</header>
        <Container maxWidth="sm">
          <NoteInput />
          <TagsList />
          <NotesList />
        </Container>
    </div>
  );
}

export default App;
