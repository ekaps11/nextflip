import { LinkProps as Props } from "react-router-dom";
import { LinkContainer } from "./CustomLink-style";

type LinkProps = {
  textDecoration?: string;
} & Props;

const CustomLink = ({ textDecoration = "", ...props }: LinkProps) => {
  return <LinkContainer $textDecoration={textDecoration} {...props} />;
};

export default CustomLink;
