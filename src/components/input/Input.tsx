import { InputHTMLAttributes, forwardRef } from "react";
import { Error, InputContainer, InputField, Label } from "./Input-style";
import { FaRegTimesCircle } from "react-icons/fa";
import { initToUpper } from "../../helper/helper";
import { useLocation } from "react-router-dom";

type InputProps = {
  label: string;
  errors?: string | boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, errors, ...props }, ref) => {
    const isMatched = useLocation().pathname === "/";
    const name = label.toLowerCase().split(" ");
    const [labelName] = name;

    return (
      <InputContainer>
        <>
          <InputField
            placeholder=" "
            aria-label={labelName}
            autoComplete="on"
            ref={ref}
            $error={isMatched && Boolean(errors)}
            {...props}
          />
          <Label>{initToUpper(label)}</Label>
        </>
        {errors && isMatched && (
          <Error>
            <i>
              <FaRegTimesCircle />
            </i>
            <span>{errors}</span>
          </Error>
        )}
      </InputContainer>
    );
  }
);

export default Input;
