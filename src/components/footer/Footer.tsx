import { Link } from "react-router-dom";
import { FOOTER_LINKS, languages } from "../../assets/data";
import BaseLayout from "../base-layout/BaseLayout";
import Paragraph from "../paragraph/Paragraph";
import { FooterContainer, Links } from "./Footer-style";
import Select from "../select/Select";

const Footer = () => {
  return (
    <FooterContainer>
      <BaseLayout>
        <Paragraph>
          Questions? Call&nbsp;
          <span>007-803-321-2130</span>
        </Paragraph>
        <Links>
          {FOOTER_LINKS.map(({ title, url }) => (
            <Link key={title} to={url} target="_blank">
              {title}
            </Link>
          ))}
        </Links>
        <Select options={languages} />
        <Paragraph>Nextflip Indonesia</Paragraph>
      </BaseLayout>
    </FooterContainer>
  );
};

export default Footer;
