import { useState } from "react";
import styled from "styled-components";

const StyledTab = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  border: 1px solid var(--color-grey-400);
  border-radius: 10px;
`;

const StyledTabButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.active ? "var(--color-primary)" : "var(--color-secondary)"};
  color: ${(props) => (props.active ? "#fff" : "inherit")};
  border-radius: 5px;
`;

function Tab({ tabs, defaultTab, onTabChange }) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <StyledTab>
      {tabs.map((tab) => (
        <StyledTabButton
          key={tab}
          active={activeTab === tab}
          onClick={() => handleTabChange(tab)}
        >
          {tab}
        </StyledTabButton>
      ))}
    </StyledTab>
  );
}

export default Tab;
