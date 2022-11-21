import "./App.scss";
import { Container } from "@mui/system";
import NoteInput from "./components/Note-input";
import TagsList from "./components/Tags-list";

function App() {
  return (
    <div className="App">
        <header className="App__header">123</header>
        <Container maxWidth="sm">
          <NoteInput />
          <TagsList />
        </Container>
    </div>
  );
}

export default App;
