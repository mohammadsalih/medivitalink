import Heading from "../../ui/Heading";
import styled from "styled-components";
import URLTab from "../../ui/URLTab";

const StyledHeader = styled.header`
  margin-bottom: 3.2rem;

  display: flex;

  align-items: center;
  justify-content: space-between;
`;

function PatientInfoHeader({ patientType }) {
  return (
    <StyledHeader>
      <Heading as="h1">{patientType} section</Heading>

      <URLTab
        field="patientType"
        values={[
          { name: "Emergency", value: "emergency" },
          { name: "General", value: "general" },
        ]}
      />
    </StyledHeader>
  );
}

export default PatientInfoHeader;
