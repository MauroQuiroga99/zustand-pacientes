import PatientForm from "./components/PatientForm";
import PatientList from "./components/PatientList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className=" container mx-auto mt-20 ">
        <h1 className=" font-black text-5xl text-center md:w-2/3 md:mx-auto">
          Seguimiento de pacientes {""}{" "}
          <span className="text-indigo-700">Veterinaria </span>{" "}
        </h1>
      </div>
      <div className="mt-12 md:flex">
        <PatientForm />
        <PatientList />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
