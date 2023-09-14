import { StateCreator } from "zustand";
import axios from "axios";
import { apiUrl } from "@/constant/env";

export interface User {
  id: number;
  username: string;
  role: string;
  ait: number;
}

export interface UserState {
  users: User | null;
  loginUser: (username: string, password: string) => Promise<void>;
  loginadmin: (username: string, password: string) => Promise<void>;
  getUserInfo: () => void;
  logout: () => void;
  errorMessage?: string;
  errorMessageadmin?: string;
}
export const userSlice: StateCreator<UserState> = (set, get) => ({
  users: null,
  errorMessage: "",
  logout: async () => {
    await axios.post(`${apiUrl}/logout`);
  },
  loginUser: async (username: string, password: string) => {
    try {
      set({ errorMessage: "" });
      await axios.post(`${apiUrl}/login`, {
        username,
        password,
      });
    } catch (err: any) {
      set({ errorMessage: err.response.data.message });
    }
  },
  loginadmin: async (username: string, password: string) => {
    try {
      set({ errorMessage: "" });
      await axios.post(`${apiUrl}/login/admin`, {
        username,
        password,
      });
    } catch (err: any) {
      set({ errorMessage: err.response.data.message });
    }
  },
  getUserInfo: async () => {
    try {
      const userInfo = await axios.get(`${apiUrl}/login`);
      set({ users: userInfo.data });
    } catch (err) {
      throw err;
    }
  },
});
