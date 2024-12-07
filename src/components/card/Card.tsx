import { CardContainer } from "./Card-style";
import { useGetMovieQuery, extendedUrl, image } from "../../utils/tmdb";
import CardDetail from "./CardDetail";
import Spinner from "../spinner/Spinner";

type CardProps = {
  id: number;
  onClick?: () => void;
};

const Card = ({ id, onClick }: CardProps) => {
  const { data, isLoading } = useGetMovieQuery(
    `movie/${id}${extendedUrl}&language=en-US`
  );

  isLoading && <Spinner />;

  return (
    <CardContainer key={id} onClick={onClick}>
      <img src={image + data?.backdrop_path} alt={data?.title} loading="lazy" />
      <CardDetail data={data} />
    </CardContainer>
  );
};

export default Card;
