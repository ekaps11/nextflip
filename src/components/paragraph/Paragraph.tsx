import { FC, ReactNode } from "react";
import { ParagraphContainer } from "./Paragraph.style";

type ParagraphProps = { children: ReactNode };

const Paragraph: FC<ParagraphProps> = ({ children }) => {
  return <ParagraphContainer>{children}</ParagraphContainer>;
};

export default Paragraph;
