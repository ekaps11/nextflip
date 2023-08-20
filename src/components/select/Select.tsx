import { SelectContainer } from "./Select-style";

const Select = ({ options }: { options: string[] | number[] }) => {
  return (
    <SelectContainer>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </SelectContainer>
  );
};

export default Select;
