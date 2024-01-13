import { useState } from "react";

import Tab from "../../ui/Tab";

function PatientEmergencyInfo() {
  const [activeTab, setActiveTab] = useState("Tab 1");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const tabContent = () => {
    switch (activeTab) {
      case "Tab 1":
        return <h1>a</h1>;
      case "Tab 2":
        return <h1>b</h1>;
      default:
        return null;
    }
  };

  return (
    <>
      <Tab
        tabs={["Tab 1", "Tab 2"]}
        defaultTab="Tab 1"
        onTabChange={handleTabChange}
      />
      {tabContent()}
    </>
  );
}

export default PatientEmergencyInfo;

// import useDrugAllergys from "./usePatientDrugAllergys";

// const { patientId } = useParams();
// const { drugAllergys, isLoading, error } = useDrugAllergys(patientId);

// if (isLoading) return <Spinner />;
// if (error) return <p>could not load the cabins</p>;
