import { createContext, Dispatch, SetStateAction } from "react";

export interface INote {
  id: number;
  value: string;
}

export interface ITag {
  id: number;
  value: string;
}

interface IData {
  notes: INote[];
  tags: ITag[];
}

interface IDataSetters {
  setNotes: Dispatch<SetStateAction<INote[]>>;
  setTags: Dispatch<SetStateAction<ITag[]>>;
}

type DataContextType = [IData, IDataSetters];

export const DataContext = createContext<DataContextType>([
  { notes: [], tags: [] },
  { setNotes: () => {}, setTags: () => {} },
]);
