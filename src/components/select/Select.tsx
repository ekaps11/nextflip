import { FC } from "react";

type SelectProps = {
  options: string[];
};

const Select: FC<SelectProps> = ({ options }) => {
  return (
    <select>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
};

export default Select;
