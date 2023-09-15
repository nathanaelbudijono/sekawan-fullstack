import { StateCreator } from "zustand";
import axios from "axios";
import { apiUrl } from "@/constant/env";

export interface Kendaraan {
  rows: {
    kendaraan: {
      id: number;
      jenis: string;
      plat: string;
      Service: string;
      BBM: string;
      driver: string;
    };
    id: number;
    namaPengaju: string;
    kotaAsal: string;
    keterangan: string;
    kotaTujuan: string;
    status: string;
    tanggal: string;
    kendaraanId: number;
  }[];
}
export interface KendaraanState {
  kendaraan: Kendaraan;
  getKendaraan: (id: number) => void;
}
export const kendaraanSlice: StateCreator<KendaraanState> = (set, get) => ({
  kendaraan: { rows: [] },
  getKendaraan: async (id: number) => {
    try {
      const form = await axios.get(`${apiUrl}/kendaraan/${id}`);
      set({ kendaraan: form.data });
    } catch (err) {
      console.log(err);
    }
  },
});
