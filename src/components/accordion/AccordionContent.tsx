import { FC } from "react";
import { Header, HeaderIcon, Content, Inner } from "./Accordion-style";

export type AccordionContentProps = {
  itemName: string;
  itemContent: string;
  isActive: boolean;
  onClick: () => void;
};

const AccordionContent: FC<AccordionContentProps> = ({
  itemName,
  itemContent,
  isActive,
  onClick,
}) => {
  return (
    <>
      <Header onClick={onClick}>
        {itemName}
        <HeaderIcon $isActive={isActive} />
      </Header>
      <Content $itemName={itemName} $isActive={isActive}>
        <Inner id={itemName}>{itemContent}</Inner>
      </Content>
    </>
  );
};

export default AccordionContent;
