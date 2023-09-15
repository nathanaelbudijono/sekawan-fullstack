import { create } from "zustand";
import { UserState, userSlice } from "./slice/user-slices";
import { FormState, formSlice } from "./slice/pengajuan-slices";
import { KendaraanState, kendaraanSlice } from "./slice/kendaraan-slices";
import { Kendaraan2State, kendaraan2Slice } from "./slice/kendaraan2-slices";

type storeState = UserState & FormState & KendaraanState & Kendaraan2State;

export const useAppStore = create<storeState>()((...a) => ({
  ...userSlice(...a),
  ...formSlice(...a),
  ...kendaraanSlice(...a),
  ...kendaraan2Slice(...a),
}));
