import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FooterContainer, Links } from "./Footer-style";
import FooterLinks from "./FooterLinks";
import SelectLanguage from "../select/SelectLanguage";
import { useAppSelector } from "../../store/store";

type FooterLinkProps = {
  title: string;
  url: string;
  element: string;
};

const Footer = () => {
  const isMatched = useLocation().pathname === "/";
  const { t } = useTranslation();
  const { user } = useAppSelector(({ user }) => user);

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

          if (isMatched) return footer;
          if (!isMatched && element !== "footer") return footer;
        })}
      </Links>
      <SelectLanguage />
      <p>{!user ? "Nextflip Indonesia" : "© 2023-2024 Nextflip, Inc."}</p>
    </FooterContainer>
  );
};

export default Footer;
