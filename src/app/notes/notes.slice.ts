import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface INote {
  id: number;
  value: string;
}

export interface ITag {
  id: number;
  value: string;
}

export interface INotesDataState {
  notes: INote[];
  tags: ITag[];
}

export const initialState: INotesDataState = {
  notes: [],
  tags: [{id: 4, value: "item4"}, {id: 5, value: "item5"}],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNewNote: (state, action: PayloadAction<string>) => {
      const lastId = state.notes.length ? state.notes[state.notes.length - 1].id : -1;
      state.notes.push({ id: lastId + 1, value: action.payload });
    },
    deleteTag: (state, action: PayloadAction<number>) => {
        state.tags = state.tags.filter((tag) => tag.id !== action.payload)
      },
  },
});

export const { addNewNote, deleteTag } = notesSlice.actions;

export const selectNotes = (state: RootState) => state.notes;

export default notesSlice.reducer;
