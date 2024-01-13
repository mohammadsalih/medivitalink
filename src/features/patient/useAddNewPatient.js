import { useMutation } from "@tanstack/react-query";
import { addNewPatient as addNewPatientApi } from "../../services/apiPatient";
import { toast } from "react-hot-toast";

export function useAddNewPatient() {
  const { mutate: addNewPatient, isLoading } = useMutation({
    mutationFn: addNewPatientApi,
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verufy the new account from the Patient's email address."
      );
    },
  });

  return { addNewPatient, isLoading };
}
