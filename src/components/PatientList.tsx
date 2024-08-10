import { usePatientStore } from "../store";

export default function PatientList() {
  const patients = usePatientStore((state) => state.patients);
  console.log(patients);
  return <div>PatientList</div>;
}
