import { CardContainer } from "./Card-style";
import { useGetMovieQuery, extendedUrl, image } from "../../utils/tmdb";
import CardDetail from "./CardDetail";

type CardProps = {
  id: number;
};

const Card = ({ id }: CardProps) => {
  const { data } = useGetMovieQuery(`movie/${id}${extendedUrl}`);

  return (
    <CardContainer key={id}>
      <img src={image + data?.backdrop_path} alt={data?.title} />
      <CardDetail data={data} />
    </CardContainer>
  );
};

export default Card;
