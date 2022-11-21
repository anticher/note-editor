import { createContext, Dispatch, SetStateAction } from "react";

interface IData {
  notes: string[];
  tags: string[];
}

interface IDataSetters {
  setNotes: Dispatch<SetStateAction<string[]>>;
  setTags: Dispatch<SetStateAction<string[]>>;
}

type DataContextType = [IData, IDataSetters];

export const DataContext = createContext<DataContextType>([
  { notes: [], tags: [] },
  { setNotes: () => {}, setTags: () => {} },
]);
