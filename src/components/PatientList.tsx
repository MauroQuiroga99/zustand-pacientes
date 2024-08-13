import { useSelector } from "react-redux";
import PatientDetail from "./PatientDetail";
import { getPatients } from "../store/selectors/patient";

export default function PatientList() {
  const patients = useSelector(getPatients);

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">
      {patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            {" "}
            Administra tus {""}{" "}
            <span className="text-indigo-600 font-bold">
              Pacientes y citas{" "}
            </span>{" "}
          </p>
          {patients.map((patient) => (
            <PatientDetail key={patient.id} patient={patient} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold">
              Y apareceran en este lugar{" "}
            </span>
          </p>
        </>
      )}
    </div>
  );
}
