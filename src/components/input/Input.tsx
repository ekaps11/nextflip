import { InputHTMLAttributes, forwardRef } from "react";
import { Error, InputContainer, InputField, Label } from "./Input-style";
import { FaRegTimesCircle } from "react-icons/fa";

type InputProps = {
  label: string;
  errors?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, errors, ...props }, ref) => {
    const name = label.toLowerCase().split(" ");
    const [labelName] = name;

    return (
      <InputContainer>
        <>
          <InputField
            ref={ref}
            placeholder=" "
            {...props}
            $error={Boolean(errors)}
          />
          <Label htmlFor={labelName} aria-labelledby={labelName}>
            {name.join(" ").replace(labelName[0], labelName[0].toUpperCase())}
          </Label>
        </>
        {errors && (
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
