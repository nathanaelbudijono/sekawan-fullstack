import { StateCreator } from "zustand";
import axios from "axios";
import { apiUrl } from "@/constant/env";

export interface Form {
  rows: {
    namaPengaju: string;
    kotaAsal: string;
    keterangan: string;
    kotaTujuan: string;
    status: string;
    tanggal: string;
    PilihanKendaraan: string;
  }[];
}

export interface FormState {
  forms: Form;
  postForm: (forms: any) => Promise<void>;
  getForm: () => void;
}

export const formSlice: StateCreator<FormState> = (set, get) => ({
  forms: { rows: [] },
  postForm: async (forms) => {
    try {
      axios.post(`${apiUrl}/pengajuan`, forms);
    } catch (err) {
      console.log(err);
    }
  },
  getForm: async () => {
    try {
      const form = await axios.get(`${apiUrl}/pengajuan/get`);
      set({ forms: form.data });
    } catch (err) {
      console.log(err);
    }
  },
});
