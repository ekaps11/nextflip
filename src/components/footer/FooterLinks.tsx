import CustomLink from "../custom-link/CustomLink";

type Props = {
  to: string;
  title: string;
};

const FooterLinks = ({ to, title }: Props) => {
  return (
    <CustomLink to={to} target="_blank">
      {title}
    </CustomLink>
  );
};

export default FooterLinks;
