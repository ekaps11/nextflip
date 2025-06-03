import { getDuration } from "../../utils/helper/helper";
import { useGetMovieQuery, extendedUrl, Movie } from "../../api/tmdb";
import { FaPlus, FaCheck } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import {
  PreviewDetailContainer,
  TrailerYear,
  TrailerDetail,
  ActionButton,
} from "./PreviewDetail-style";
import { t } from "i18next";
import Spinner from "../spinner/Spinner";
import {
  useAddToListMutation,
  useCheckIsInListQuery,
  useRemoveFromListMutation,
} from "../../api/firestore";

type PreviewDetailProps = {
  movieID: string;
  movieDetail: Movie;
};

const PreviewDetail = ({ movieID, movieDetail }: PreviewDetailProps) => {
  const { data, isLoading } = useGetMovieQuery(
    `movie/${movieID}/credits${extendedUrl}&language=en-US`
  );
  const { data: isInList, refetch } = useCheckIsInListQuery(movieID);
  const [addToList] = useAddToListMutation();
  const [removeFromList] = useRemoveFromListMutation();

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

  const handleClick = async () => {
    if (isInList) {
      await removeFromList(movieID);
    } else {
      await addToList(movieDetail);
    }

    refetch();
  };

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

      <ActionButton $isInList={isInList}>
        <div onClick={handleClick}>
          {isInList ? <FaCheck /> : <FaPlus />}
          <p>{t("preview.list")}</p>
        </div>

        <div>
          <SlLike />
          <p>{t("preview.rate")}</p>
        </div>
      </ActionButton>

      <hr />
    </PreviewDetailContainer>
  );
};

export default PreviewDetail;
