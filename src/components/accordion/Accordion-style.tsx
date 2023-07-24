import { styled } from "styled-components";
import { colors } from "../../GlobalStyles";
import { FaPlus } from "react-icons/fa";

export const Header = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1em;
  text-align: left;
  background: ${colors.secondary};
  font-size: 1.15em;
`;

export const HeaderIcon = styled(FaPlus)<{ $isActive: boolean }>`
  transform: rotate(${({ $isActive }) => ($isActive ? 45 : 0)}deg);
  transition: all 0.2s;
`;

export const Content = styled.div<{ $isActive: boolean; $itemName: string }>`
  overflow: hidden;
  margin-bottom: 0.3em;
  transition: height 0.3s;
  height: ${({ $isActive, $itemName }) => {
    const inner = document.getElementById($itemName);

    return `${$isActive && inner ? inner.clientHeight : 0}px`;
  }};
`;

export const Inner = styled.div`
  padding: 1em;
  background: ${colors.secondary};
  border-radius: 4px;
  margin-top: 0.1em;
  line-height: 1.5;
  font-size: 1.15em;
`;
