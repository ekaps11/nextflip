import { FaPlay, FaPlus, FaChevronDown } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { CardContainer, CardInfo } from "./Card-style";
import { t } from "i18next";
import { getTime } from "../../utils/helper/helper";
import { useGetMovieQuery, extendedUrl, image } from "../../utils/tmdb";

type CardProps = {
  id: number;
};

const Card = ({ id }: CardProps) => {
  const { data } = useGetMovieQuery(
    `https://api.themoviedb.org/3/movie/${id}${extendedUrl}`
  );

  const movieDuration = getTime(data?.runtime);

  const movieGenre = data?.genres
    .map(({ id }: { id: number }) => t(`genres.${id}`))
    .join(" • ");

  return (
    <CardContainer key={id}>
      <img src={image + data?.backdrop_path} alt={data?.title} />

      <CardInfo>
        <div>
          <FaPlay />
          <FaPlus />
          <SlLike />
          <FaChevronDown />
        </div>
        <p>
          {movieDuration} <span>HD</span>{" "}
          <img src="images/spatial.png" alt={data?.title} />
        </p>
        <p>{movieGenre}</p>
      </CardInfo>
    </CardContainer>
  );
};

export default Card;
