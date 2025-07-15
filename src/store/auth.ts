import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface AuthState {
  accessToken: string | null;
  setAuth: (auth: { accessToken: string }) => void;
}

export const useAuthStore = create<AuthState>()(
  devtools((set) => ({
    accessToken: null,
    setAuth: (auth) => set({ accessToken: auth.accessToken }),
    clearAuth: () => set({ accessToken: null }),
  }),{name: "aaaa",store: "auth"})
);

export const setAccessToken = (accessToken: string) =>
  useAuthStore.setState({ accessToken });

export const removeAccessToken = () =>
    useAuthStore.setState({ accessToken: null });


// Helper function to decode JWT token

export const useAccessToken = () => useAuthStore(state => state.accessToken);



