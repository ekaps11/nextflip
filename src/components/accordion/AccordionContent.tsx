import { Header, HeaderIcon, Content, Inner } from "./Accordion-style";

type AccordionContentProps = {
  header: string;
  content: string;
  isActive: boolean;
  onClick: () => void;
};

const AccordionContent = ({
  header,
  content,
  isActive,
  onClick,
}: AccordionContentProps) => {
  return (
    <>
      <Header onClick={onClick}>
        {header}
        <HeaderIcon $isActive={isActive} />
      </Header>
      <Content $itemName={header} $isActive={isActive}>
        <Inner id={header}>{content}</Inner>
      </Content>
    </>
  );
};

export default AccordionContent;
