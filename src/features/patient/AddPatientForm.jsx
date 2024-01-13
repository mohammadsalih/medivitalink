import { useForm } from "react-hook-form";

import { useaddNewPatient } from "./useAddNewPatient";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

function AddPatientForm() {
  const { addNewUser, isLoading } = useaddNewPatient();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  console.log(errors);

  function onSubmit({ fullName, email, password }) {
    addNewUser(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          disabled={isLoading}
          onClick={reset}
        >
          Cancel
        </Button>
        <Button disabled={isLoading}>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default AddPatientForm;
