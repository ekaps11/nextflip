import { useLocation } from "react-router-dom";
import { FOOTER_LINKS, languages } from "../../assets/data";
import BaseLayout from "../base-layout/BaseLayout";
import Select from "../select/Select";
import { FooterContainer, Links } from "./Footer-style";
import FooterLinks from "./FooterLinks";

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
            else if (!isMatched && element !== "footer") return footer;
          })}
        </Links>
        <Select options={languages} />
        {isMatched && <p>Nextflip Indonesia</p>}
      </BaseLayout>
    </FooterContainer>
  );
};

export default Footer;
