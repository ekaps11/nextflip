import { BaseLayout } from "../../GlobalStyles";
import { FaqContainer } from "./Faq-style";
import Accordion from "../accordion/Accordion";
import { FAQ } from "../../assets/data";

const Faq = () => {
  return (
    <FaqContainer>
      <BaseLayout>
        <h1>Frequently Asked Questions</h1>
        <Accordion items={FAQ} />
      </BaseLayout>
    </FaqContainer>
  );
};

export default Faq;
