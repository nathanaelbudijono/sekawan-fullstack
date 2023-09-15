import { StateCreator } from "zustand";
import axios from "axios";
import { apiUrl } from "@/constant/env";

export interface Kendaraan2 {
  rows: {
    id: number;
    jenis: string;
    plat: string;
    Service: string;
    BBM: string;
    driver: string;
  }[];
}
export interface Kendaraan2State {
  kendaraan2: Kendaraan2;
  getKendaraan2: () => void;
}
export const kendaraan2Slice: StateCreator<Kendaraan2State> = (set, get) => ({
  kendaraan2: { rows: [] },
  getKendaraan2: async () => {
    try {
      const form = await axios.get(`${apiUrl}/kendaraan`);
      set({ kendaraan2: form.data });
    } catch (err) {
      console.log(err);
    }
  },
});
