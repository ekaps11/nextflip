import styled from "styled-components";
import { image } from "../../utils/tmdb";

export const DashboardContainer = styled.div<{ $bg: string }>`
  padding-top: 2em;
  background: url(${({ $bg }) => $bg && image + $bg}) center;
  background-size: cover;
`;
