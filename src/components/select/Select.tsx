import { SelectHTMLAttributes } from "react";
import { SelectContainer } from "./Select-style";
import SelectOption from "./SelectOptions";

type SelectProps = {
  options: string[] | number[];
} & SelectHTMLAttributes<HTMLSelectElement>;

const Select = ({ options, ...props }: SelectProps) => {
  return (
    <SelectContainer {...props}>
      {options.map((option) => (
        <SelectOption key={option}>{option}</SelectOption>
      ))}
    </SelectContainer>
  );
};

export default Select;
