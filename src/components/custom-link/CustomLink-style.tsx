import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const LinkContainer = styled(Link)<{ $textDecoration?: string }>`
  color: inherit;
  text-decoration: ${({ $textDecoration }) => $textDecoration};
`;
