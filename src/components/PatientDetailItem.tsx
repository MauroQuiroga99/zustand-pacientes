type PatientDtailItemProps = {
  label: string;
  data: string;
};

export default function PatientDtailItem({
  label,
  data,
}: PatientDtailItemProps) {
  return (
    <div>
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        {" "}
        {label}: {""}
        <span className="font-normal normal-case">{data} </span>
      </p>
    </div>
  );
}
