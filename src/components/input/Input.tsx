import { InputHTMLAttributes, forwardRef, useState } from "react";
import {
  InputError,
  InputContainer,
  InputField,
  Label,
  ShowPassword,
} from "./Input-style";
import { FaRegTimesCircle } from "react-icons/fa";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

type InputProps = {
  label: string;
  errors?: string | boolean;
  borderBottom?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, errors, borderBottom, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const { type } = props;
    const name = label.toLowerCase().split(" ");
    const [labelName] = name;

    const getType = () => {
      if (type === "password")
        return (props.type = showPassword ? "text" : "password");
    };

    return (
      <InputContainer>
        <>
          <InputField
            placeholder=" "
            aria-label={labelName}
            ref={ref}
            type={getType()}
            $error={Boolean(errors)}
            $border={Boolean(borderBottom)}
            {...props}
          />
          <Label>{label}</Label>

          {type !== "email" && (
            <ShowPassword
              title={`${showPassword ? "hide" : "show"} password`}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <MdOutlineVisibilityOff />
              ) : (
                <MdOutlineVisibility />
              )}
            </ShowPassword>
          )}
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
