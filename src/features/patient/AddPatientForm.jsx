import { useForm } from "react-hook-form";

import { useAddNewPatient } from "./useAddNewPatient";

import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FormRowVertical from "../../ui/FormRowVertical";
import styled from "styled-components";

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

function AddPatientForm() {
  const { addNewPatient, isLoading } = useAddNewPatient();
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({
    full_name,
    patient_id,
    date_of_birth,
    gender,
    job,
    marital_status,
    no_children,
    height,
    bmi,
    blood_type,
    rh_system,
    phone_number,
    emergency_phone_number,
  }) {
    const data = {
      full_name,
      patient_id,
      date_of_birth,
      gender,
      job,
      marital_status,
      no_children,
      height,
      bmi,
      blood_type,
      rh_system,
      phone_number,
      emergency_phone_number,
    };

    addNewPatient(data, {
      onSuccess: () => {
        console.log("Success! Resetting form.");
        reset();
      },
    });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical label="Full Name" error={errors?.full_name?.message}>
        <Input
          type="text"
          id="full_name"
          disabled={isLoading}
          {...register("full_name", { required: "This field is required" })}
        />
      </FormRowVertical>
      <FormRow>
        <FormRowVertical label="Patient id" error={errors?.patient_id?.message}>
          <Input
            type="number"
            id="patient_id"
            disabled={isLoading}
            {...register("patient_id", { required: "This field is required" })}
          />
        </FormRowVertical>

        <FormRowVertical
          label="Date of birth"
          error={errors?.date_of_birth?.message}
        >
          <Input
            type="date"
            id="date_of_birth"
            disabled={isLoading}
            {...register("date_of_birth", {
              required: "This field is required",
            })}
          />
        </FormRowVertical>
      </FormRow>
      <FormRow>
        <FormRowVertical label="Gender" error={errors?.gender?.message}>
          <StyledSelect
            disabled={isLoading}
            id="gender"
            {...register("gender", {
              required: "This field is required",
            })}
          >
            <option value="" hidden>
              Select an option
            </option>

            <option value="male">male</option>
            <option value="female">female</option>
          </StyledSelect>
        </FormRowVertical>

        <FormRowVertical label="job " error={errors?.job?.message}>
          <Input
            type="text"
            id="job"
            disabled={isLoading}
            {...register("job", { required: "This field is required" })}
          />
        </FormRowVertical>
      </FormRow>
      <FormRow>
        <FormRowVertical
          label="Marital status"
          error={errors?.marital_status?.message}
        >
          <Input
            type="text"
            id="marital_status"
            disabled={isLoading}
            {...register("marital_status", {
              required: "This field is required",
            })}
          />
        </FormRowVertical>

        <FormRowVertical
          label="Number of children"
          error={errors?.no_children?.message}
        >
          <Input
            type="number"
            id="no_children"
            disabled={isLoading}
            {...register("no_children", { required: "This field is required" })}
          />
        </FormRowVertical>
      </FormRow>
      <FormRow>
        <FormRowVertical label="height - cm" error={errors?.height?.message}>
          <Input
            type="number"
            id="height"
            disabled={isLoading}
            {...register("height", { required: "This field is required" })}
          />
        </FormRowVertical>

        <FormRowVertical label="BMI" error={errors?.bmi?.message}>
          <Input
            type="number"
            id="bmi"
            disabled={isLoading}
            {...register("bmi", { required: "This field is required" })}
          />
        </FormRowVertical>
      </FormRow>
      <FormRow>
        <FormRowVertical label="Blood type" error={errors?.blood_type?.message}>
          <StyledSelect
            disabled={isLoading}
            id="blood_type"
            {...register("blood_type", {
              required: "This field is required",
            })}
          >
            <option value="" hidden>
              Select an option
            </option>

            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="o+">o+</option>
            <option value="o-">o-</option>
          </StyledSelect>
        </FormRowVertical>
        <FormRowVertical label="RH system" error={errors?.rh_system?.message}>
          <StyledSelect
            disabled={isLoading}
            id="rh_system"
            {...register("rh_system", {
              required: "This field is required",
            })}
          >
            <option value="" hidden>
              Select an option
            </option>
            <option value="positive+">positive</option>
            <option value="negative">negative</option>
          </StyledSelect>
        </FormRowVertical>
      </FormRow>

      <FormRow>
        <FormRowVertical
          label="Phone number"
          error={errors?.phone_number?.message}
        >
          <Input
            type="number"
            id="phone_number"
            disabled={isLoading}
            {...register("phone_number", {
              required: "This field is required",
            })}
          />
        </FormRowVertical>

        <FormRowVertical
          label="Emergency phone number"
          error={errors?.emergency_phone_number?.message}
        >
          <Input
            type="number"
            id="emergency_phone_number"
            disabled={isLoading}
            {...register("emergency_phone_number", {
              required: "This field is required",
            })}
          />
        </FormRowVertical>
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
        <Button disabled={isLoading}>Create new patient</Button>
      </FormRow>
    </Form>
  );
}

export default AddPatientForm;
