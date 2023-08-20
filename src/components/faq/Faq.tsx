import BaseLayout from "../base-layout/BaseLayout";
import Accordion from "../accordion/Accordion";
import { FaqContainer } from "./Faq-style";
import { FAQ } from "../../assets/data";
import SignUp from "../sign-up/SignUp";

const Faq = () => {
  return (
    <FaqContainer>
      <BaseLayout>
        <h1>Frequently Asked Questions</h1>
        <Accordion items={FAQ} />
        <br /> <br />
        <SignUp />
      </BaseLayout>
    </FaqContainer>
  );
};

export default Faq;
