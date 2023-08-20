import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/store";
import { toggleAccordion } from "../../store/slices/uiSlice";
import { Header, HeaderIcon, Content, Inner } from "./Accordion-style";

type AccordionProps = {
  items: {
    header: string;
    content: string;
  }[];
};

const Accordion = ({ items }: AccordionProps) => {
  const dispatch = useDispatch();
  const active = useAppSelector(({ ui }) => ui.accordion);

  const toggleActive = (name: string) =>
    dispatch(toggleAccordion(name === active ? null : name));

  return (
    <>
      {items.map(({ header, content }) => {
        const isActive = active === header;

        return (
          <div key={header}>
            <Header key={header} onClick={() => toggleActive(header)}>
              {header}
              <HeaderIcon $isActive={isActive} />
            </Header>
            <Content $itemName={header} $isActive={isActive}>
              <Inner id={header}>{content}</Inner>
            </Content>
          </div>
        );
      })}
    </>
  );
};

export default Accordion;
