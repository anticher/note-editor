import { useState } from "react";
import "./App.scss";
import { Container } from "@mui/system";
import NoteInput from "./components/Note-input";
import { DataContext, INote, ITag } from "./data/data";
import TagsList from "./components/Tags-list";

function App() {
  const [notes, setNotes] = useState<INote[]>([]);
  const [tags, setTags] = useState<ITag[]>([{id: 1, value: "item1"}, {id: 2, value: "item2"}]);

  return (
    <div className="App">
      <DataContext.Provider value={[{ notes, tags }, {setNotes, setTags}]}>
        <header className="App__header">123</header>
        <Container maxWidth="sm">
          <NoteInput />
          <TagsList />
        </Container>
      </DataContext.Provider>
    </div>
  );
}

export default App;
