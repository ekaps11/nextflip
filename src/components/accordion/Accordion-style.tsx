import { styled } from "styled-components";
import { colors } from "../../GlobalStyles";
import { FaPlus } from "react-icons/fa";
import { ButtonContainer } from "../button/Button-style";

export const Header = styled(ButtonContainer)`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1em;
  text-align: left;
  background: ${colors.secondary};
  font-size: 1.15em;

  &:hover {
    background: #717272;
    transition: 0.5s;
  }
`;

export const HeaderIcon = styled(FaPlus)<{ $isActive: boolean }>`
  transform: rotate(${({ $isActive }) => ($isActive ? 45 : 0)}deg);
  transition: 0.2s;
`;

export const Content = styled.div<{
  $isActive: boolean;
  $itemName: string;
}>`
  overflow: ${({ $isActive }) => !$isActive && "hidden"};
  height: ${({ $isActive, $itemName }) => {
    const inner = document.getElementById($itemName);

    return `${$isActive && inner ? inner.clientHeight : 0}px`;
  }};
  transition: height 0.3s;
  margin-bottom: 0.3em;
`;

export const Inner = styled.div`
  background: ${colors.secondary};
  border-radius: 3px;
  border-top: 1.5px solid black;
  line-height: 1.5;
  font-size: 1.15em;
  padding: 1em;
`;
