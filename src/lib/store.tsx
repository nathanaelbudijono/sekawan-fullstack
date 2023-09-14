import { create } from "zustand";
import { UserState, userSlice } from "./slice/user-slices";
import { FormState, formSlice } from "./slice/pengajuan-slices";

type storeState = UserState & FormState;

export const useAppStore = create<storeState>()((...a) => ({
  ...userSlice(...a),
  ...formSlice(...a),
}));
