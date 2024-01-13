import { useParams } from "react-router-dom";
import useDrugAllergys from "./usePatientDrugAllergys";

import Spinner from "../../ui/Spinner";

function PatientGeneralInfo() {
  const { patientId } = useParams();

  const { drugAllergys, isLoading, error } = useDrugAllergys(patientId);

  if (isLoading) return <Spinner />;
  if (error) return <p>could not load the cabins</p>;

  return <div>PatientGeneralInfo</div>;
}

export default PatientGeneralInfo;
