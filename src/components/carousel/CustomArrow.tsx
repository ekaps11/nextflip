import { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import Button from "../button/Button";

type ArrowProps = {
  icon: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const CustomArrow = ({ icon, className, style, onClick }: ArrowProps) => {
  return (
    <Button
      className={className}
      style={{ ...style }}
      onClick={onClick}
      aria-label="arrow"
    >
      {icon}
    </Button>
  );
};

export default CustomArrow;
