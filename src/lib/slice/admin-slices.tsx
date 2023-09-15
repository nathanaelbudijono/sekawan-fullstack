import { StateCreator } from "zustand";
import axios from "axios";
import { apiUrl } from "@/constant/env";

export interface AdminForm {
  rows: {
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

export interface AdminFormState {
  adminforms: AdminForm;
  getAdminForm: () => void;
}

export const adminFormSlice: StateCreator<AdminFormState> = (set, get) => ({
  adminforms: { rows: [] },
  getAdminForm: async () => {
    try {
      const form = await axios.get(`${apiUrl}/pengajuan/getadmin`);
      set({ adminforms: form.data });
    } catch (err) {
      console.log(err);
    }
  },
});
