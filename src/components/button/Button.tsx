import { FC, ReactNode } from "react";
import { ButtonContainer } from "./Button-styles";

type ButtonProps = {
  title: string;
  children?: ReactNode;
};

const Button: FC<ButtonProps> = ({ title, children, ...props }) => {
  return (
    <ButtonContainer {...props}>
      {title}
      {children}
    </ButtonContainer>
  );
};

export default Button;
