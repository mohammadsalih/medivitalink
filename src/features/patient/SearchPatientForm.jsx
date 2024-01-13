import { useState } from "react";

import FormRowVertical from "../../ui/FormRowVertical";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import { useNavigate } from "react-router-dom";

function SearchPatientForm({ onCloseModal }) {
  const [patientId, setPatientId] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault(); 

    if (!patientId) return;

    // add it here
    navigate(`/patients/${patientId}`);

    onCloseModal?.();
  }

  return (
    <Form type="modal" onSubmit={handleSubmit}>
      <FormRowVertical label="inter patient id ">
        <Input
          type="text"
          id="patientId"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
        />
      </FormRowVertical>

      <FormRowVertical>
        <Button size="large">search</Button>
      </FormRowVertical>
    </Form>
  );
}

export default SearchPatientForm;
