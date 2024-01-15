import { useMutation } from "@tanstack/react-query";
import { addSpecialConditionData as addSpecialConditionDataApi } from "../../services/apiPatient";
import { toast } from "react-hot-toast";

export function useAddSpecialConditionData() {
  const { mutate: addSpecialConditionData, isLoading } = useMutation({
    mutationFn: addSpecialConditionDataApi,
    onSuccess: () => {
      toast.success("Allergy Data successfully inserted!");
    },
    onError: (err) => {
      console.log(`we could not inserted Allergy Data , error : ${err}`);

      toast.error("we could not inserted Allergy Data");
    },
  });

  return { addSpecialConditionData, isLoading };
}
