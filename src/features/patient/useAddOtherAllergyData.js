import { useMutation } from "@tanstack/react-query";
import { addOtherAllergyData as addOtherAllergyDataApi } from "../../services/apiPatient";

import { toast } from "react-hot-toast";

export function useAddOtherAllergyData() {
  const { mutate: addOtherAllergyData, isLoading } = useMutation({
    mutationFn: addOtherAllergyDataApi,
    onSuccess: () => {
      toast.success("Allergy Data successfully inserted!");
    },
    onError: (err) => {
      console.log(`we could not inserted Allergy Data , error : ${err}`);

      toast.error("we could not inserted Allergy Data");
    },
  });

  return { addOtherAllergyData, isLoading };
}
