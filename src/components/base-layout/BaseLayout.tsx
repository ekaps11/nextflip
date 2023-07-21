import { FC, ReactNode } from "react";
import { BaseLayoutContainer } from "./BaseLayout-style";

type BaseLayoutProps = { children: ReactNode };

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return <BaseLayoutContainer>{children}</BaseLayoutContainer>;
};

export default BaseLayout;
