import { CardContainer } from "./Card-style";

type CardProps = { title: string; img: string };

const Card = ({ title, img }: CardProps) => {
  return (
    <CardContainer>
      <img src={img} alt={title} height="100" loading="lazy" title={title} />
    </CardContainer>
  );
};

export default Card;
