import styled from "styled-components";
import { animation, colors, flex } from "../../utils/styles/commonStyle";

export const SpinnerOverlay = styled.div`
  ${flex}
  height: 100vh;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid ${colors.red[0]};
  border-radius: 50%;
  border-top-color: ${colors.grey[0]};
  animation: ${animation.spin} 1s ease-in-out infinite;
`;
