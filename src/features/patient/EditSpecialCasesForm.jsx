import React from "react";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import TextArea from "../../ui/TextArea";
import FileInput from "../../ui/FileInput";
import Button from "../../ui/Button";

const EditPastDiseaseForm = () => {
  return (
    <Form>
      <FormRowVertical label="Condition Name">
        <Input type="text" id="disease" placeholder="e.g. Anxiety" />
      </FormRowVertical>
      <FormRowVertical label="Occurance Date">
        <Input type="date" id="diagnosedate" />
      </FormRowVertical>
      <FormRowVertical label="Used Medication">
        <Input type="text" id="medicine" placeholder="e.g. 'Macrolides'" />
      </FormRowVertical>
      <FormRowVertical label="Medicine Description">
        <TextArea placeholder="Description of medicine" />
      </FormRowVertical>
      <FormRowVertical label="Medical Reports">
        <FileInput />
      </FormRowVertical>
      <FormRowVertical label="Condition Description">
        <TextArea placeholder="e.g. 'Macrolides'" />
      </FormRowVertical>
      <FormRowVertical label="Health Impact">
        <TextArea placeholder="Notes" />
      </FormRowVertical>
      <FormRowVertical>
        <Button type="submit">Save</Button>
      </FormRowVertical>
    </Form>
  );
};

export default EditPastDiseaseForm;
