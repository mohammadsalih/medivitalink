import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

const StyledURLTap = styled.div`
  padding: 1rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  border: 1px solid var(--color-grey-400);

  border-radius: 10px;
`;

function URLTap({ field, values }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const fieldName = searchParams.get(field);

  console.log("hey");

  const handleTypeChange = (type) => {
    setSearchParams({ [field]: type });
  };

  return (
    <StyledURLTap>
      {values.map((value) => (
        <Button
          variation={fieldName === value.value ? "primary" : "secondary"}
          onClick={() => handleTypeChange(value.value)}
        >
          {value.name}
        </Button>
      ))}
    </StyledURLTap>
  );
}

export default URLTap;
