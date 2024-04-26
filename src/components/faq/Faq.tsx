import { t } from "i18next";
import Accordion from "../accordion/Accordion";
import { FaqContainer } from "./Faq-style";
import SignUp from "../sign-up/SignUp";

const Faq = () => {
  const items = Object.values(t("faq.accordion", { returnObjects: true }));

  return (
    <FaqContainer>
      <h2>{t("faq.title")}</h2>
      <Accordion items={items} />
      <br />
      <SignUp />
    </FaqContainer>
  );
};

export default Faq;
