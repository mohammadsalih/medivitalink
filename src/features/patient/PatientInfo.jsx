import { useParams, useSearchParams } from "react-router-dom";
import PatientTypeForm from "./PatientTypeForm";
import PatientEmergencyInfo from "./PatientEmergencyInfo";
import PatientGeneralInfo from "./PatientGeneralInfo";
import PatientInfoHeader from "./PatientInfoHeader";

function PatientInfo() {
  const [searchParams, _] = useSearchParams();
  const { patientId } = useParams();

  const patientType = searchParams.get("patientType");

  if (!patientType) return <PatientTypeForm />;

  return (
    <div>
      <PatientInfoHeader patientType={patientType} />

      {patientType === "general" ? (
        <PatientGeneralInfo patientId={patientId} />
      ) : patientType === "emergency" ? (
        <PatientEmergencyInfo patientId={patientId} />
      ) : (
        "chose a corect type"
      )}
    </div>
  );
}

export default PatientInfo;
