import usePatient from "./usePatient";

import Spinner from "../../ui/Spinner";
import DataPresentation from "../../ui/DataPresentation";
import DataPresentationRow from "../../ui/DataPresentationRow";

function DisplayGeneralInfo({ patientId }) {
  const { patient, isLoading, error } = usePatient(patientId);

  if (isLoading) return <Spinner />;

  const {
    patient_id,
    full_name,
    date_of_birth,
    gender,
    job,
    marital_status,
    no_children,
    height,
    bmi,
    blood_type,
    rh_system,
    phone_number,
    emergency_phone_number,
  } = patient.data[0];

  const data = {
    patient_id,
    full_name,
    date_of_birth,
    gender,
    job,
    marital_status,
    no_children,
    height,
    bmi,
    blood_type,
    rh_system,
    phone_number,
    emergency_phone_number,
  };

  if (error) return <p>could not load the cabins</p>;

  return (
    <DataPresentation>
      {Object.entries(data).map(([key, value]) => (
        <DataPresentationRow
          key={key}
          title={key.replaceAll("_", " ")}
          subTitle={value}
        />
      ))}
    </DataPresentation>
  );
}

export default DisplayGeneralInfo;
