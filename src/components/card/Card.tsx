import { CardContainer, LoadingSkeleton } from "./Card-style";
import { useGetMovieQuery, extendedUrl, image } from "../../api/tmdb";
import CardDetail from "./CardDetail";

type CardProps = {
  id: number;
  onClick?: () => void;
};

const Card = ({ id, onClick }: CardProps) => {
  const { data, isLoading } = useGetMovieQuery(
    `movie/${id}${extendedUrl}&language=en-US`
  );

  return (
    <CardContainer key={id} onClick={onClick}>
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <img
          src={image + data?.backdrop_path}
          alt={data?.title}
          loading="lazy"
        />
      )}
      <CardDetail data={data} />
    </CardContainer>
  );
};

export default Card;
