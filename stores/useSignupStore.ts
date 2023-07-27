import { create } from "zustand";
import { persist } from "zustand/middleware";

type Data = {
    username: string,
    password: string,
    email: string,
    contact: string
}

interface SignupState {
    isAuthenticated: boolean;
    user: null | Data;
    token: null | string;
    login: (email: string, password: string) => Promise<void>;
    register: (userInfo: FormData) => Promise<void>;
    logout: () => void;
}

const useAuthStore = create<SignupState>()(
    persist(
      (set) => ({
        isAuthenticated: false,
        user: null,
        token: null,
        login: async (email, password) => {
          // Login user code
        },
        register: async (userInfo) => {
          // Registering user code
        },
        logout: () => {
          // Logout user code
        },
      }),
      {
        name: "auth",
      }
    )
  );
  
  export default useAuthStore;