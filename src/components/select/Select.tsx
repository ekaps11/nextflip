import { SelectHTMLAttributes } from "react";
import { SelectContainer } from "./Select-style";

type SelectProps = {
  option: string[] | number[];
} & SelectHTMLAttributes<HTMLSelectElement>;

const Select = ({ option, ...props }: SelectProps) => {
  return (
    <SelectContainer {...props}>
      {option.map((opt) => {
        return (
          <option key={opt} value={opt}>
            {opt}
          </option>
        );
      })}
    </SelectContainer>
  );
};

export default Select;
