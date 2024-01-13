import { useQuery } from "@tanstack/react-query";
import { getDrugAllergysData } from "../../services/apiPatient";

function useDrugAllergys(patientId) {
  const {
    data: drugAllergys,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["drugAllergys", patientId],
    queryFn: () => getDrugAllergysData(patientId),
  });

  return {
    drugAllergys,
    isLoading,
    error,
  };
}

export default useDrugAllergys;
