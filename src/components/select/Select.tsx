import { FC } from "react";
import { SelectContainer } from "./Select-style";

type SelectProps = { options: string[] };

const Select: FC<SelectProps> = ({ options }) => {
  return (
    <SelectContainer>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </SelectContainer>
  );
};

export default Select;
