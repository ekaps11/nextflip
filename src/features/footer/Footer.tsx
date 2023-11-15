import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FooterContainer, Links } from "./Footer-style";
import FooterLinks from "./FooterLinks";
import SelectLanguage from "../../components/select/SelectLanguage";

type FooterLinkProps = {
  title: string;
  url: string;
  element: string;
};

const Footer = () => {
  const isMatched = useLocation().pathname === "/";
  const { t } = useTranslation();
  const links: FooterLinkProps[] = Object.values(
    t("footer.links", { returnObjects: true })
  );

  return (
    <FooterContainer>
      <p>
        {t("footer.title")}&nbsp;
        <span>007-803-321-2130</span>
      </p>
      <Links>
        {links.map(({ title, url, element }) => {
          const footer = <FooterLinks key={title} title={title} to={url} />;

          if (isMatched) return footer;
          if (!isMatched && element !== "footer") return footer;
        })}
      </Links>
      <SelectLanguage id="footer-lang" />
      <p>Nextflip Indonesia</p>
    </FooterContainer>
  );
};

export default Footer;
