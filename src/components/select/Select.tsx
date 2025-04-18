import { ReactNode, SelectHTMLAttributes } from "react";
import { SelectContainer } from "./Select-style";

type SelectProps = {
  id: string;
  icon?: ReactNode;
  option: string[] | number[];
  isHidden?: boolean;
} & SelectHTMLAttributes<HTMLSelectElement>;

const Select = ({ id, icon, option, isHidden, ...props }: SelectProps) => {
  return (
    <SelectContainer>
      <label htmlFor={id}>{id}</label>
      {icon}
      <select id={id} {...props}>
        {option.map((opt, i) => {
          return (
            <option key={opt} value={opt} hidden={isHidden && i === 0}>
              {opt}
            </option>
          );
        })}
      </select>
    </SelectContainer>
  );
};

export default Select;
