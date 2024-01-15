import { useState } from "react";
import Tab from "../../ui/Tab";
import DisplayGeneralInfo from "./DisplayGeneralInfo";

const forms = ["General", "Drug Allergy", "Other Allergy", "Special Condition"];

function RenderForm({ form, patientId }) {
  switch (form) {
    case "General":
      return <DisplayGeneralInfo patientId={patientId} />;
    case "Drug Allergy":
      return <h1>info 2</h1>;
    case "Other Allergy":
      return <h1>info 3</h1>;
    case "Special Condition":
      return <h1>info 4</h1>;
    default: {
      return <h1>chone an option</h1>;
    }
  }
}

function PatientEmergencyInfo({ patientId }) {
  const [currentForm, setCurrentForm] = useState(forms[0]);

  return (
    <>
      <Tab
        tabs={forms}
        defaultTab={forms[0]}
        onTabChange={(tab) => {
          setCurrentForm(tab);
        }}
      />

      {<RenderForm form={currentForm} patientId={patientId} />}
    </>
  );
}

export default PatientEmergencyInfo;
