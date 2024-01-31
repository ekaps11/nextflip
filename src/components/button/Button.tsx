import { ReactNode, ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./Button-style";

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: ButtonProps) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

export default Button;
