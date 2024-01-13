import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";

function NewHospital() {
  return (
    <>
      <Heading as="h1">Create a new hospital account</Heading>

      <SignupForm />
    </>
  );
}

export default NewHospital;
