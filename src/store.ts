import { create } from "zustand";
import { DraftPatient, Patient } from "./types";

type PatientsState = {
  patients: Patient[];
  addPatient: (data: DraftPatient) => void;
};

export const usePatientStore = create<PatientsState>(() => ({
  patients: [],
  addPatient: (data) => {
    console.log(data);
  },
}));
