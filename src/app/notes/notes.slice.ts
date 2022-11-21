import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface INote {
  id: number;
  value: string;
}

export interface INotesDataState {
  notes: INote[];
  tags: string[];
  filterTag: string;
}

export const initialState: INotesDataState = {
  notes: [],
  tags: [],
  filterTag: ''
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNewNote: (state, action: PayloadAction<string>) => {
      const lastId = state.notes.length
        ? state.notes[state.notes.length - 1].id
        : -1;
      state.notes.push({ id: lastId + 1, value: action.payload });
    },
    updateNote: (
      state,
      action: PayloadAction<{ id: number; text: string }>
    ) => {
      const index = state.notes.findIndex(
        (note) => note.id === action.payload.id
      );
      state.notes[index] = {
        id: action.payload.id,
        value: action.payload.text,
      };
    },
    deleteNote: (state, action: PayloadAction<number>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    addNewTag: (state, action: PayloadAction<string>) => {
      if (!state.tags.includes(action.payload)) {
        state.tags.push(action.payload);
      }
    },
    deleteTag: (state, action: PayloadAction<string>) => {
      state.tags = state.tags.filter((tag) => tag !== action.payload);
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filterTag = action.payload;
    },
    resetFilter: (state, action: PayloadAction<void>) => {
      state.filterTag = '';
    },
  },
});

export const { addNewNote, updateNote, addNewTag, deleteTag, deleteNote, setFilter, resetFilter } =
  notesSlice.actions;

export const selectNotes = (state: RootState) => state.notes;

export default notesSlice.reducer;
