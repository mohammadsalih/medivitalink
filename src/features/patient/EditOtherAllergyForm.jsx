import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import TextArea from "../../ui/TextArea";
import FileInput from "../../ui/FileInput";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useAddOtherAllergyData } from "./useAddOtherAllergyData";

const EditDrugAllergyForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const { isLoading, addOtherAllergyData } = useAddOtherAllergyData();

  function onSubmit(allergyData) {
    const investigation = allergyData.investigation[0];

    addOtherAllergyData(
      { ...allergyData, investigation },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical label="patient ID">
        <Input
          type="number"
          id="patient ID"
          placeholder="e.g. Typhoid"
          {...register("patient_id", {
            required: "this field is required",
          })}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label="Name">
        <Input
          type="text"
          id="name"
          placeholder="e.g. Typhoid"
          {...register("name", {
            required: "this field is required",
          })}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label="investigation Report">
        <FileInput
          {...register("investigation", {
            required: "this field is required",
          })}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label="Description">
        <TextArea
          placeholder="Description"
          {...register("description", {
            required: "this field is required",
          })}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical>
        <Button type="submit">Save</Button>
      </FormRowVertical>
    </Form>
  );
};

export default EditDrugAllergyForm;
