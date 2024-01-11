import { CardContainer } from "./Card-style";

type CardProps = {
  posterUrl: string;
  movieTitle: string;
};

const Card = ({ posterUrl, movieTitle }: CardProps) => {
  return (
    <CardContainer>
      <img src={posterUrl} alt={movieTitle} />
      <div>
        <p>{movieTitle}</p>
      </div>
    </CardContainer>
  );
};

export default Card;
