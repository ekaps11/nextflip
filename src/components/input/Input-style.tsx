import { styled } from "styled-components";
import { colors } from "../../GlobalStyles";

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const InputField = styled.input<{ $error?: boolean }>`
  display: flex;
  width: 100%;
  background: black;
  opacity: 0.7;
  color: inherit;
  border: 1px solid ${colors.secondary};
  border-radius: 3px;
  padding: 1.2em 1em;
  border: ${({ $error }) =>
    `1px solid ${$error ? "#fa2f2f" : colors.secondary}`};
  outline-offset: 2px;

  &:focus {
    outline: 2px solid white;
  }

  &:not(:placeholder-shown) + label,
  &:focus + label {
    font-size: 10px;
    transform: translateX(5px) translateY(-5px);
    transition: 0.3s;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: white;
    transition: background-color 5000s ease-in-out 0s;
    box-shadow: inset 0 0 20px 20px black;
  }

  &[type="password"] {
    letter-spacing: 3px;
  }
`;

export const Label = styled.label`
  position: absolute;
  left: 0;
  padding: 1em;
  pointer-events: none;
  transition: 0.3s;
  margin-bottom: 1em;
`;

export const Error = styled.p`
  display: flex;
  color: #fa2f2f;
  gap: 0.35em;
  margin-top: 0.5em;

  span {
    text-align: left;
    font-size: 0.8em;
    padding-right: 0.1em;
    margin-top: 2px;
  }
`;
