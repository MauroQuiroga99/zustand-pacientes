import { RootState } from "..";

export const getPatients = (state: RootState) => {
  return state.patient.patients;
};

export const getActivePatientId = (state: RootState) => {
  return state.patient.activeId;
};
