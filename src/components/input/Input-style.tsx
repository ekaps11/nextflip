import { styled } from "styled-components";
import { colors } from "../../utils/styles/commonStyle";

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const InputField = styled.input<{
  $error?: boolean;
  $border?: boolean;
}>`
  display: flex;
  width: 100%;
  background: black;
  opacity: 0.7;
  color: inherit;
  border: 1px solid ${colors.grey[0]};
  border-radius: 3px;
  padding: 1.2em 1em;
  border: ${({ $error }) =>
    `1px solid ${$error ? colors.red[2] : colors.grey[0]}`};
  border-bottom: ${({ $border }) =>
    $border ? `2px solid ${colors.orange}` : ""};
  outline-offset: 2px;
  caret-color: white;

  &:focus {
    outline: 2px solid white;
  }

  &:not(:placeholder-shown) + span,
  &:focus + span {
    font-size: 10px;
    transform: translateX(3px) translateY(-8.5px);
    transition: 0.3s;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:focus {
    -webkit-background-clip: text;
    -webkit-text-fill-color: white;
    background: inherit;
    transition: background-color 5000s ease-in-out 0s;
  }

  &[type="password"] {
    letter-spacing: 3px;
  }

  input[type="checkbox"] {
    margin-right: 3px;
    height: 0.9em;
    accent-color: grey;
  }
`;

export const Label = styled.span`
  position: absolute;
  left: 0;
  padding: 1em;
  pointer-events: none;
  transition: 0.3s;
  margin-bottom: 1em;
`;

export const InputError = styled.p`
  display: flex;
  color: ${colors.red[2]};
  gap: 0.35em;
  margin-top: 0.75em;

  span {
    text-align: left;
    font-size: 0.8em;
    padding-right: 0.1em;
    margin-top: 2px;
  }
`;
