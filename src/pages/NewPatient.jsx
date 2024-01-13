import AddPatientForm from "../features/patient/AddPatientForm";
import Heading from "../ui/Heading";

function NewPatient() {
  return (
    <>
      <Heading as="h1">Create a new Patient s account</Heading>
      <AddPatientForm />
    </>
  );
}

export default NewPatient;
