import styled from "styled-components";
import { banner } from "../../utils/tmdb";
import { gradientBg, flex } from "../../utils/styles/commonStyle";

export const DashboardBg = styled.div<{ $bg: string }>`
  ${flex}
  justify-content: flex-start;
  background: ${gradientBg.bot}, url(${({ $bg }) => $bg && banner + $bg});
  background-size: cover;
  aspect-ratio: 2;
  padding-left: 5%;

  @media (max-width: 45em) and (max-height: 25em) and (orientation: landscape) {
    aspect-ratio: 16/9;
  }
`;
