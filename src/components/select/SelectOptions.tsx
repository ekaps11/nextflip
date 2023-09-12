import { ReactNode } from "react";

type SelectOptionProps = {
  children: ReactNode;
};

const SelectOption = ({ children }: SelectOptionProps) => {
  return <option>{children}</option>;
};

export default SelectOption;
