import { create } from "zustand";
import { UserState, userSlice } from "./slice/user-slices";
import { FormState, formSlice } from "./slice/pengajuan-slices";
import { KendaraanState, kendaraanSlice } from "./slice/kendaraan-slices";

type storeState = UserState & FormState & KendaraanState;

export const useAppStore = create<storeState>()((...a) => ({
  ...userSlice(...a),
  ...formSlice(...a),
  ...kendaraanSlice(...a),
}));
