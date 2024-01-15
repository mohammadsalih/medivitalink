import { useQuery } from "@tanstack/react-query";
import { getPatientData } from "../../services/apiPatient";

function usePatientData(patientId) {
  const {
    data: patient,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["patient", patientId],
    queryFn: () => getPatientData(patientId),
  });

  return {
    patient,
    isLoading,
    error,
  };
}

export default usePatientData;
