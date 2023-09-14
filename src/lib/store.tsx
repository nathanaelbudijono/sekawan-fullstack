import { create } from "zustand";
import { UserState, userSlice } from "./slice/user-slices";

type storeState = UserState;

export const useAppStore = create<storeState>()((...a) => ({
  ...userSlice(...a),
}));
