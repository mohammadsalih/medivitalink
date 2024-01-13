import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import TextArea from "../../ui/TextArea";
import FileInput from "../../ui/FileInput";
import Button from "../../ui/Button";

const EditPastDiseaseForm = () => {
  // const [surgery, setSurgery] = useState("");
  // const [anthesiaType, setAnthesiaType] = useState([]);
  // const [surgeryDate, setSurgeryDate] = useState(Date);
  // const [usedMedicine, setUsedMedicine] = useState("");
  // const [medicineDescription, setMedicineDescription] = useState("");
  // const [file, setFile] = useState("");
  // const [surgeryReasons, setSurgeryReasons] = useState("");
  // const [note, setNote] = useState("");

  // const handleSubmit = (e) => { }

  return (
    <Form>
      <FormRowVertical label="Surgery Name">
        <Input type="text" id="disease" placeholder="e.g. Appendectomy" />
      </FormRowVertical>
      <FormRowVertical label="Type of Anthtesia">
        <Input type="number" id="natureofdisease" />
      </FormRowVertical>
      <FormRowVertical label="Surgery Date">
        <Input type="date" id="diagnosedate" />
      </FormRowVertical>
      <FormRowVertical label="Used Medicine">
        <Input type="text" id="medicine" placeholder="e.g. 'Macrolides'" />
      </FormRowVertical>
      <FormRowVertical label="Medicine Description">
        <TextArea placeholder="Description of medicine" />
      </FormRowVertical>
      <FormRowVertical label="Medical Reports">
        <FileInput />
      </FormRowVertical>
      <FormRowVertical label="Surgery Reasons">
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
