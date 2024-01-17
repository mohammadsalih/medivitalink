import styled from "styled-components";
import Stats from "./Stats";
import BeadChart from "./BeadChart";
import GeneralChart from "./GeneralChart";
import PatientsChart from "./PatientsChart";
// import PatientsChart from "./patientsChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <Stats />
      <BeadChart />
      <GeneralChart />
      <PatientsChart />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
