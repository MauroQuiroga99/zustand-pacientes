import { createSlice } from "@reduxjs/toolkit";
import { DraftPatient, Patient } from "../../types";
import { v4 as uuidv4 } from "uuid";

type PatientState = {
  patients: Patient[];
  activeId: Patient["id"];
};

const initialState: PatientState = {
  patients: [],
  activeId: "",
};

const createPatient = (patient: DraftPatient): Patient => {
  return {
    ...patient,
    id: uuidv4(),
  };
};

const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    addPatient: (state, action) => {
      console.log(action);
      const data = action.payload.data;
      const newPatient = createPatient(data);
      state.patients = [...state.patients, newPatient];
    },

    deletePatient: (state, action) => {
      state.patients = state.patients.filter(
        (patient) => patient.id !== action.payload.data
      );
    },

    setCurrentPatient: (state, action) => {
      state.activeId = action.payload.data;
    },
    updatePatient: (state, action) => {
      const { updateData } = action.payload;
      state.patients = state.patients.map((patient) =>
        patient.id === state.activeId ? { ...patient, ...updateData } : patient
      );
      state.activeId = "";
    },
  },
});

export const { addPatient, deletePatient, setCurrentPatient, updatePatient } =
  patientSlice.actions;
export default patientSlice.reducer;
