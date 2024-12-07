import { getDuration } from "../../utils/helper/helper";
import { useGetMovieQuery, extendedUrl, Movie } from "../../utils/tmdb";
import { FaPlus, FaShare } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import {
  PreviewDetailContainer,
  TrailerYear,
  TrailerDetail,
  ActionButton,
} from "./PreviewDetail-style";
import { t } from "i18next";
import Spinner from "../spinner/Spinner";

type PreviewDetailProps = {
  movieID: string;
  movieDetail: Movie;
};

const PreviewDetail = ({ movieID, movieDetail }: PreviewDetailProps) => {
  const { data, isLoading } = useGetMovieQuery(
    `movie/${movieID}/credits${extendedUrl}&language=en-US`
  );

  const overview =
    movieDetail?.overview.length > 400
      ? movieDetail?.overview.slice(0, 400)
      : movieDetail?.overview;

  const casts =
    data?.cast
      .slice(0, 5)
      .map(({ name }: { name: string }) => name)
      .join(", ") + ", ...more";

  const director = data?.crew.filter(
    ({ job }: { job: string }) => job === "Director"
  );

  const genres = movieDetail?.genres
    .map(({ id }) => t(`genres.${id}`).toLowerCase())
    .join(", ");

  if (isLoading) return <Spinner />;

  return (
    <PreviewDetailContainer>
      <h2>{movieDetail?.title}</h2>
      <TrailerYear>
        <p>{movieDetail?.release_date.slice(0, 4)}</p>
        <p>{getDuration(movieDetail?.runtime)}</p>
        <span>HD</span>
        <img src="images/spatial.png" alt={movieDetail?.title} />
      </TrailerYear>

      <TrailerDetail>
        <p>{overview}</p>
        <p>
          {t("preview.cast")}: {casts}
        </p>
        <p>Genres: {genres}</p>
        <p>
          {t("preview.director")}: {director?.at(0)?.name}
        </p>
      </TrailerDetail>

      <ActionButton>
        <div>
          <FaPlus />
          <p>{t("preview.list")}</p>
        </div>

        <div>
          <SlLike />
          <p>{t("preview.rate")}</p>
        </div>

        <div>
          <FaShare />
          <p>{t("preview.share")}</p>
        </div>
      </ActionButton>
      <hr />
    </PreviewDetailContainer>
  );
};

export default PreviewDetail;
