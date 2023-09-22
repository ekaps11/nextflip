import { LinkProps } from "react-router-dom";
import { LinkContainer } from "./CustomLink-style";

const CustomLink = ({ ...props }: LinkProps) => {
  return <LinkContainer {...props} />;
};

export default CustomLink;
