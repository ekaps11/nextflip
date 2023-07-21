import { FC, ReactNode } from "react";
import { Header1Container } from "./Header1-styles";

type Header1Props = { children: ReactNode };

const Header1: FC<Header1Props> = ({ children }) => {
  return <Header1Container>{children}</Header1Container>;
};

export default Header1;
