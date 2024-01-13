import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import TextArea from "../../ui/TextArea";
import FileInput from "../../ui/FileInput";
import Button from "../../ui/Button";

const EditPastDiseaseForm = () => {
  // const [disease, setDisease] = useState("");
  // const [diseaseNature, setDiseaseNature] = useState(0);
  // const [diagnoseDate, setDiagnoseDate] = useState(Date);
  // const [medicine, setMedicine] = useState("");
  // const [medicineDescription, setMedicineDescription] = useState("");
  // const [file, setFile] = useState("");
  // const [diagnoses, setDiagnoses] = useState("");
  // const [note, setNote] = useState("");

  // const handleSubmit = (e) => {};

  return (
    <Form>
      <FormRowVertical label="Disease Name">
        <Input type="text" id="disease" placeholder="e.g. Typhoid" />
      </FormRowVertical>
      <FormRowVertical label="Nature of disease">
        <Input type="number" id="natureofdisease" />
      </FormRowVertical>
      <FormRowVertical label="Diagnose Date">
        <Input type="date" id="diagnosedate" />
      </FormRowVertical>
      <FormRowVertical label="Medicine">
        <Input type="text" id="medicine" placeholder="e.g. 'Macrolides'" />
      </FormRowVertical>
      <FormRowVertical label="Medicine Description">
        <TextArea placeholder="Description of medicine" />
      </FormRowVertical>
      <FormRowVertical label="Medical Reports">
        <FileInput />
      </FormRowVertical>
      <FormRowVertical label="Diagnoses">
        <TextArea placeholder="e.g. 'Macrolides'" />
      </FormRowVertical>
      <FormRowVertical label="Note">
        <TextArea placeholder="Notes" />
      </FormRowVertical>
      <FormRowVertical>
        <Button type="submit">Save</Button>
      </FormRowVertical>
    </Form>
  );
};

export default EditPastDiseaseForm;
