import { useMutation } from "@tanstack/react-query";
import { addNewPatient as addNewPatientApi } from "../../services/apiPatient";
import { toast } from "react-hot-toast";

export function useAddNewPatient() {
  const { mutate: addNewPatient, isLoading } = useMutation({
    mutationFn: addNewPatientApi,
    onSuccess: () => {
      toast.success("Patient Account successfully created!");
    },
    onError: (err) => {
      console.log(`we could not create the user , error : ${err}`);

      toast.error("we could not create the user");
    },
  });

  return { addNewPatient, isLoading };
}
