import { useSearchParams } from "react-router-dom";
import PatientTypeForm from "./PatientTypeForm";
import PatientEmergencyInfo from "./PatientEmergencyInfo";
import PatientGeneralInfo from "./PatientGeneralInfo";
import PatientInfoHeader from "./PatientInfoHeader";

function PatientInfo() {
  const [searchParams, _] = useSearchParams();

  const patientType = searchParams.get("patientType");

  if (!patientType) return <PatientTypeForm />;

  return (
    <div>
      <PatientInfoHeader patientType={patientType} />

      {patientType === "general" ? (
        <PatientGeneralInfo />
      ) : patientType === "emergency" ? (
        <PatientEmergencyInfo />
      ) : (
        "chose a corect type"
      )}
    </div>
  );
}

export default PatientInfo;
