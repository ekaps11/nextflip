import { ReactNode, SelectHTMLAttributes } from "react";
import { IoLanguage } from "react-icons/io5";
import { SelectContainer } from "./Select-style";

type SelectProps = {
  icon?: ReactNode;
  option: string[] | number[];
} & SelectHTMLAttributes<HTMLSelectElement>;

const Select = ({ icon = <IoLanguage />, option, ...props }: SelectProps) => {
  return (
    <SelectContainer>
      {icon}
      <select id="languages" {...props}>
        {option.map((opt) => {
          return (
            <option key={opt} value={opt}>
              {opt}
            </option>
          );
        })}
      </select>
    </SelectContainer>
  );
};

export default Select;
