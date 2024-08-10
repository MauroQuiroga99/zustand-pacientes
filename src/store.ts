import { create } from "zustand";
import { Patient } from "./types";
type PatientsState = {
  patients: Patient[];
};

export const usePatientStore = create<PatientsState>(() => ({
  patients: [],
}));
