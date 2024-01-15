import { useMutation } from "@tanstack/react-query";
import { addDrugAllergyData as addDrugAllergyDataApi } from "../../services/apiPatient";
import { toast } from "react-hot-toast";

export function useAddDrugAllergyData() {
  const { mutate: addDrugAllergyData, isLoading } = useMutation({
    mutationFn: addDrugAllergyDataApi,
    onSuccess: () => {
      toast.success("Allergy Data successfully inserted!");
    },
    onError: (err) => {
      console.log(`we could not inserted Allergy Data , error : ${err}`);

      toast.error("we could not inserted Allergy Data");
    },
  });

  return { addDrugAllergyData, isLoading };
}
