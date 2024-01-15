import { useState } from "react";
import Heading from "../ui/Heading";
import Tab from "../ui/Tab";
import EditDrugAllergyForm from "../features/patient/EditDrugAllergyForm";
import EditOtherAllergyForm from "../features/patient/EditOtherAllergyForm";
import EditSpecialCasesForm from "../features/patient/EditSpecialCasesForm";

const forms = ["Drug Allergy", "Other Allergy", "Special Condition"];

function RenderForm(form) {
  switch (form) {
    case "Drug Allergy":
      return <EditDrugAllergyForm />;
    case "Other Allergy":
      return <EditOtherAllergyForm />;
    case "Special Condition":
      return <EditSpecialCasesForm />;
    default: {
      return <h1>Default Case</h1>;
    }
  }
}

function EditPatientData() {
  const [currentForm, setCurrentForm] = useState(forms[0]);

  return (
    <>
      <Heading as="h1">Edit Patient Data</Heading>
      <Tab
        tabs={forms}
        defaultTab={forms[0]}
        onTabChange={(tab) => {
          setCurrentForm(tab);
        }}
      />
      {RenderForm(currentForm)}
    </>
  );
}

export default EditPatientData;
