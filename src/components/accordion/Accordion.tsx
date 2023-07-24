import { FC } from "react";
import AccordionContent from "./AccordionContent";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/store";
import { toggleAccordion } from "../../store/slices/uiSlice";

type AccordionProps = {
  items: {
    header: string;
    content: string;
  }[];
};

const Accordion: FC<AccordionProps> = ({ items }) => {
  const dispatch = useDispatch();
  const active = useAppSelector(({ ui }) => ui.accordion);

  const toggleActive = (name: string) =>
    dispatch(toggleAccordion(name === active ? null : name));

  return (
    <>
      {items.map(({ header, content }) => {
        const isActive = active === header;

        return (
          <AccordionContent
            key={header}
            itemName={header}
            itemContent={content}
            isActive={isActive}
            onClick={() => toggleActive(header)}
          />
        );
      })}
    </>
  );
};

export default Accordion;
