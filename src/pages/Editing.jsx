import { useState } from "react";
import Heading from "../ui/Heading";
import Tab from "../ui/Tab";
import EditPastDiseaseForm from "../features/patient/EditPastDiseaseForm";
import EditPastSurgeryForm from "../features/patient/EditPastSurgeryForm";
import EditSpecialCasesForm from "../features/patient/EditSpecialCasesForm";

const forms = ["Past Disease", "Past Surgery", "Special Condition"]
function RenderForm(form) {
  switch (form) {
    case "Past Disease": return <EditPastDiseaseForm />
    case "Past Surgery": return <EditPastSurgeryForm />
    case "Special Condition": return <EditSpecialCasesForm />
    default: {
      return <h1>Default Case</h1>
    }

  }
}
function EditPatientData() {
  const [currentForm, setCurrentForm] = useState(forms[0])
  return (
    <>
      <Heading as="h1">Edit Patient Data</Heading>
      <Tab tabs={forms} defaultTab={forms[0]} onTabChange={(tab) => { setCurrentForm(tab) }} />
      {RenderForm(currentForm)}
    </>
  );
}

export default EditPatientData;
