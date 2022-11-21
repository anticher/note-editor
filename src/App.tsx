import { useState } from "react";
import "./App.scss";
import { Container } from "@mui/system";
import NoteInput from "./components/Note-input";
import { DataContext } from "./data/data";

function App() {
  const [notes, setNotes] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  return (
    <div className="App">
      <DataContext.Provider value={[{ notes, tags }, {setNotes, setTags}]}>
        <header className="App__header">123</header>
        <Container maxWidth="sm">
          <NoteInput />
        </Container>
      </DataContext.Provider>
    </div>
  );
}

export default App;
