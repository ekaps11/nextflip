import { CardContainer } from "./Card-style";
import { useGetMovieQuery, extendedUrl, image } from "../../utils/tmdb";
import CardDetail from "./CardDetail";
import Spinner from "../spinner/Spinner";

type CardProps = {
  id: number;
};

const Card = ({ id }: CardProps) => {
  const { data, isLoading } = useGetMovieQuery(`movie/${id}${extendedUrl}`);

  isLoading && <Spinner />;
  if (!data) return;

  return (
    <CardContainer key={id}>
      <img src={image + data?.backdrop_path} alt={data?.title} />
      <CardDetail data={data} />
    </CardContainer>
  );
};

export default Card;
