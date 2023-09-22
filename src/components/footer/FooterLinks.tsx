import CustomLink from "../custom-link/CustomLink";

type FooterLinksProps = {
  to: string;
  title: string;
};

const FooterLinks = ({ to, title }: FooterLinksProps) => {
  return (
    <CustomLink to={to} target="_blank">
      {title}
    </CustomLink>
  );
};

export default FooterLinks;
