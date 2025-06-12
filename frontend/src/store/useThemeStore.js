import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("Chatrix-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("Chatrix-theme", theme);
    set({ theme });
  },
}));