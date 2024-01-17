import styled from "styled-components";

import Heading from "./Heading";

const StyledDataPresentationRow = styled.div`
  margin-bottom: 2rem;
  padding: 2.4rem 4rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  /* Box */
  background-color: var(--color-grey-100);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
`;

function DataPresentationRow({ title, subTitle, description, image }) {
  return (
    <StyledDataPresentationRow>
      <Heading as={"h2"}>
        {title} {" : "} {subTitle}
      </Heading>

      <p>{description}</p>

      {image ? <img src={image} alt={image} /> : ""}
    </StyledDataPresentationRow>
  );
}

export default DataPresentationRow;
