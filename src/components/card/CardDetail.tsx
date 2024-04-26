import { FaPlay, FaPlus, FaChevronDown } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { CardInfo } from "./Card-style";
import { t } from "i18next";
import { getTime } from "../../utils/helper/helper";
import { Movie, extendedUrl, useGetMovieQuery } from "../../utils/tmdb";

type CardDetailProps = {
  data: Movie;
  isDisplay?: boolean;
};

const CardDetail = ({ data, isDisplay = true }: CardDetailProps) => {
  const { data: detail } = useGetMovieQuery(
    `movie/${data?.id}/credits${extendedUrl}`
  );

  const releaseDate = data?.release_date.slice(0, 4);

  const movieDuration = getTime(data?.runtime);

  const movieGenre = data?.genres
    .map(({ id }: { id: number }) => t(`genres.${id}`))
    .join(isDisplay ? " • " : ", ");

  const casts =
    detail?.cast
      .slice(0, 5)
      .map(({ name }: { name: string }) => name)
      .join(", ") + ", ...more";

  return (
    <CardInfo>
      {isDisplay && (
        <div>
          <FaPlay />
          <FaPlus />
          <SlLike />
          <FaChevronDown />
        </div>
      )}

      <p>
        {releaseDate} {movieDuration} <span>HD</span>{" "}
        <img src="images/spatial.png" alt={data?.title} />
      </p>

      {!isDisplay && (
        <>
          <p>{data?.overview}</p>
          {detail?.cast && (
            <p>
              {t("preview.cast")}: {casts}
            </p>
          )}
        </>
      )}

      <p>Genre: {movieGenre}</p>
    </CardInfo>
  );
};

export default CardDetail;
