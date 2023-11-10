import { InputHTMLAttributes, forwardRef } from "react";
import { InputError, InputContainer, InputField, Label } from "./Input-style";
import { FaRegTimesCircle } from "react-icons/fa";

type InputProps = {
  label: string;
  errors?: string | boolean;
  borderBottom?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, errors, borderBottom, ...props }, ref) => {
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
            $error={Boolean(errors)}
            $border={Boolean(borderBottom)}
            {...props}
          />
          <Label>{label}</Label>
        </>
        {errors && (
          <InputError>
            <FaRegTimesCircle />
            <span>{errors}</span>
          </InputError>
        )}
      </InputContainer>
    );
  }
);

export default Input;
