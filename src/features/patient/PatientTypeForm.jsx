import styled from "styled-components";

import { HiOutlineChevronRight } from "react-icons/hi2";

import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Button from "../../ui/Button";
import { useSearchParams } from "react-router-dom";

const PatientTypeFormContainer = styled.div`
  min-height: 75vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-width: 35rem;

  font-size: 2.4rem;
`;

function PatientTypeForm() {
  const [_, setSearchParams] = useSearchParams();

  const handleTypeChange = (type) => {
    setSearchParams({ patientType: type });
  };

  return (
    <PatientTypeFormContainer>
      <Form>
        <FormRowVertical>
          <Button size="large" onClick={() => handleTypeChange("emergency")}>
            <StyledButton>
              Emergency data
              <HiOutlineChevronRight />
            </StyledButton>
          </Button>
        </FormRowVertical>

        <FormRowVertical>
          <Button size="large" onClick={() => handleTypeChange("general")}>
            <StyledButton>
              General data
              <HiOutlineChevronRight />
            </StyledButton>
          </Button>
        </FormRowVertical>
      </Form>
    </PatientTypeFormContainer>
  );
}

export default PatientTypeForm;
