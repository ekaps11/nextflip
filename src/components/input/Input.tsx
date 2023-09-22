import { InputHTMLAttributes, forwardRef } from "react";
import { InputError, InputContainer, InputField, Label } from "./Input-style";
import { FaRegTimesCircle } from "react-icons/fa";
import { initToUpper } from "../../helper/helper";

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
          <Label>{initToUpper(label)}</Label>
        </>
        {errors && (
          <InputError>
            <i>
              <FaRegTimesCircle />
            </i>
            <span>{errors}</span>
          </InputError>
        )}
      </InputContainer>
    );
  }
);

export default Input;
