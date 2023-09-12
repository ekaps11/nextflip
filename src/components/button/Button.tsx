import { ReactNode, ButtonHTMLAttributes } from "react";
import { ButtonContainer, ButtonSpinner } from "./Button-style";

type ButtonProps = {
  children: ReactNode;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, isLoading, ...props }: ButtonProps) => {
  return (
    <ButtonContainer disabled={isLoading} {...props}>
      {isLoading ? <ButtonSpinner /> : children}
    </ButtonContainer>
  );
};

export default Button;
