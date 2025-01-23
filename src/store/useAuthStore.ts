import { AuthState } from "@/types/auth";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      nickname: "",
      setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
      setNickname: (nickname) => set({ nickname }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
