import usePatient from "./usePatient";

import Spinner from "../../ui/Spinner";

function DisplayGeneralInfo({ patientId }) {
  const { patient, isLoading, error } = usePatient(patientId);

  if (isLoading) return <Spinner />;
  if (error) return <p>could not load the cabins</p>;

  console.log(patient);

  return <div>this is general info {patientId}</div>;
}

export default DisplayGeneralInfo;
