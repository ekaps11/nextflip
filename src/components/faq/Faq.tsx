import { useTranslation } from "react-i18next";
import BaseLayout from "../base-layout/BaseLayout";
import Accordion from "../accordion/Accordion";
import { FaqContainer } from "./Faq-style";
import SignUp from "../sign-up/SignUp";

const Faq = () => {
  const { t } = useTranslation();
  const items = Object.values(t("faq.accordion", { returnObjects: true }));

  return (
    <FaqContainer>
      <BaseLayout>
        <h1>{t("faq.title")}</h1>
        <Accordion items={items} />
        <br />
        <SignUp />
      </BaseLayout>
    </FaqContainer>
  );
};

export default Faq;
