import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

interface AppState {
  hasSeenOnboarding: boolean;
  setHasSeenOnboarding: () => Promise<void>;
  loadAppState: () => Promise<void>;
}

export const useAppStore = create<AppState>((set) => ({
  hasSeenOnboarding: false,

  setHasSeenOnboarding: async () => {
    await AsyncStorage.setItem("hasSeenOnboarding", "true");

    set({
      hasSeenOnboarding: true,
    });
  },

  loadAppState: async () => {
    const value = await AsyncStorage.getItem("hasSeenOnboarding");

    set({
      hasSeenOnboarding: value === "true",
    });
  },
}));