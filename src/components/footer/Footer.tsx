import { useLocation } from "react-router-dom";
import { FOOTER_LINKS } from "../../assets/data/data";
import BaseLayout from "../base-layout/BaseLayout";
import { FooterContainer, Links } from "./Footer-style";
import FooterLinks from "./FooterLinks";
import SelectLanguage from "../select/SelectLanguage";

const Footer = () => {
  const isMatched = useLocation().pathname === "/";

  return (
    <FooterContainer>
      <BaseLayout>
        <p>
          Questions? Call&nbsp;
          <span>007-803-321-2130</span>
        </p>
        <Links>
          {FOOTER_LINKS.map(({ title, url, element }) => {
            const footer = <FooterLinks key={title} title={title} to={url} />;

            if (isMatched) return footer;
            if (!isMatched && element !== "footer") return footer;
          })}
        </Links>
        <SelectLanguage id="footer-lang" />
        <p>Nextflip Indonesia</p>
      </BaseLayout>
    </FooterContainer>
  );
};

export default Footer;
