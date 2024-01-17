import styled from "styled-components";

const StyledDataPresentation = styled.div`
  padding: 2.4rem 4rem;

  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  font-size: 1.6rem;
`;

function DataPresentation({ children }) {
  return <StyledDataPresentation>{children}</StyledDataPresentation>;
}

export default DataPresentation;
