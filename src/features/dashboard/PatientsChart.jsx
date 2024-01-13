import styled from "styled-components";
import DashboardBox from "./DashboardBox";
import Heading from "../../ui/Heading";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { useDarkMode } from "../../context/DarkModeContext";

const StyledPatientsChart = styled(DashboardBox)`
  grid-column: 1 / -1;

  /* Hack to change grid line colors */
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;

function PatientsChart() {
  const { isDarkMode } = useDarkMode();

  const data = [
    { label: "Jan 06", newPatient: 125, oldPatient: 88 },
    { label: "Jan 07", newPatient: 72, oldPatient: 205 },
    { label: "Jan 06", newPatient: 215, oldPatient: 121 },
    { label: "Jan 07", newPatient: 60, oldPatient: 43 },
    { label: "Jan 06", newPatient: 198, oldPatient: 176 },
    { label: "Jan 07", newPatient: 126, oldPatient: 44 },
    { label: "Jan 06", newPatient: 88, oldPatient: 149 },
    { label: "Jan 07", newPatient: 103, oldPatient: 62 },
  ];

  const colors = isDarkMode
    ? {
        newPatient: { stroke: "#4f46e5", fill: "#4f46e5" },
        oldPatient: { stroke: "#22c55e", fill: "#22c55e" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        newPatient: { stroke: "#4f46e5", fill: "#c7d2fe" },
        oldPatient: { stroke: "#16a34a", fill: "#dcfce7" },
        text: "#374151",
        background: "#fff",
      };

  return (
    <StyledPatientsChart>
      <Heading as="h2">Type Patients Growth</Heading>

      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={data}>
          <XAxis
            dataKey="label"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <CartesianGrid strokeDasharray="4" />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area
            dataKey="newPatient"
            type="monotone"
            stroke={colors.newPatient.stroke}
            fill={colors.newPatient.fill}
            strokeWidth={2}
            name="New patients "
          />
          <Area
            dataKey="oldPatient"
            type="monotone"
            stroke={colors.oldPatient.stroke}
            fill={colors.oldPatient.fill}
            strokeWidth={2}
            name="Old patients "
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledPatientsChart>
  );
}

export default PatientsChart;
