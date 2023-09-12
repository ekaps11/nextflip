import { useState } from "react";
import AccordionContent from "./AccordionContent";

type AccordionProps = {
  items: {
    header: string;
    content: string;
  }[];
};

const Accordion = ({ items }: AccordionProps) => {
  const [active, setActive] = useState<string | null>(null);

  const toggleActive = (name: string) =>
    setActive(name === active ? null : name);

  return (
    <>
      {items.map(({ header, content }) => {
        const isActive = active === header;

        return (
          <AccordionContent
            key={header}
            header={header}
            content={content}
            isActive={isActive}
            onClick={() => toggleActive(header)}
          />
        );
      })}
    </>
  );
};

export default Accordion;
