import { create } from "zustand";

export type IUseTextInputStore = {
  text: string;
  setText: (text: string) => void;
};

export const useTextInputStore = create<IUseTextInputStore>((set) => ({
  text: "",
  setText: (text) => set({ text }),
}));
