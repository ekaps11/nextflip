import { useLocation } from "react-router-dom";
import { FooterContainer, Links } from "./Footer-style";
import FooterLinks from "./FooterLinks";
import SelectLanguage from "../select/SelectLanguage";
import { useAppSelector } from "../../store/store";
import { t } from "i18next";

type FooterLinkProps = {
  title: string;
  url: string;
  element: string;
};

const Footer = () => {
  const { pathname } = useLocation();
  const { user } = useAppSelector(({ user }) => user);
  const getYear = new Date().getFullYear();

  const matchedLink =
    pathname === "/" || pathname === "/search" || pathname === "/browse";

  const links: FooterLinkProps[] = Object.values(
    t("footer.links", { returnObjects: true })
  );

  return (
    <FooterContainer $user={!user}>
      <p>
        {t("footer.title")}&nbsp;
        <span>007-803-321-2130</span>
      </p>
      <Links>
        {(!user ? links : links.slice(4)).map(({ title, url, element }) => {
          const footer = <FooterLinks key={title} title={title} to={url} />;

          if (matchedLink) return footer;
          if (!matchedLink && element !== "footer") return footer;
        })}
      </Links>
      <SelectLanguage id="footer-language" />
      <p>{!user ? "Nextflip Indonesia" : `© 2023-${getYear} Nextflip, Inc.`}</p>
    </FooterContainer>
  );
};

export default Footer;
