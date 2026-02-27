import { create } from "zustand";
import { persist } from "zustand/middleware";
import api from "../utils/api";

const useUserStore = create(
  persist(
    (set) => ({
      user: null,

      checkAuth: async () => {
        try {
          const { data } = await api.get("/users/check-auth");

          set({ user: data?.user || data });
        } catch (error) {
          set({ user: null });
          localStorage.removeItem("user-storage");
        }
      },

      login: (userData) =>
        set({
          user: userData,
        }),

      logout: async () => {
        try {
          await api.post("/users/logout");
        } finally {
          set({ user: null });
          localStorage.removeItem("user-storage");
        }
      },
    }),
    { name: "user-storage" },
  ),
);

export default useUserStore;
