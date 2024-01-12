import { ReactNode, SelectHTMLAttributes } from "react";
import { IoLanguage } from "react-icons/io5";
import { SelectContainer } from "./Select-style";

type SelectProps = {
  id: string;
  icon?: ReactNode;
  option: string[] | number[];
} & SelectHTMLAttributes<HTMLSelectElement>;

const Select = ({
  id,
  icon = <IoLanguage />,
  option,
  ...props
}: SelectProps) => {
  return (
    <SelectContainer>
      <label htmlFor={id}>{id}</label>
      {icon}
      <select id={id} {...props}>
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
