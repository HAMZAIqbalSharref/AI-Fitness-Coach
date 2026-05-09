import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../types";

interface AuthStore {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,
      isAuthenticated: false,
      setUser: (user) =>
        set({
          user,
          isAuthenticated: !!user
        }),
      setLoading: (loading) => set({ isLoading: loading }),
      login: (user) =>
        set({
          user,
          isAuthenticated: true
        }),
      logout: () =>
        set({
          user: null,
          isAuthenticated: false
        })
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
);