import { FaPlay, FaPlus, FaChevronDown } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { CardInfo } from "./Card-style";
import { t } from "i18next";
import { getDuration } from "../../utils/helper/helper";
import { Movie, extendedUrl, useGetMovieQuery } from "../../api/tmdb";
// import {
//   useAddToListMutation,
//   useCheckIsInListQuery,
//   useRemoveFromListMutation,
// } from "../../api/firestore";

type CardDetailProps = {
  data: Movie;
  isDisplay?: boolean;
};

const CardDetail = ({ data, isDisplay = true }: CardDetailProps) => {
  const { data: detail } = useGetMovieQuery(
    `movie/${data?.id}/credits${extendedUrl}&language=en-US`,
    { skip: !data?.id }
  );

  // const { data: isInList, refetch } = useCheckIsInListQuery(
  //   data?.id.toString() || ""
  // );

  // const [addToList] = useAddToListMutation();
  // const [removeFromList] = useRemoveFromListMutation();

  const releaseDate = data?.release_date.slice(0, 4);

  const movieDuration = getDuration(data?.runtime);

  const movieGenre = data?.genres
    .map(({ id }: { id: number }) => t(`genres.${id}`))
    .join(isDisplay ? " • " : ", ");

  const casts =
    detail?.cast
      .slice(0, 5)
      .map(({ name }: { name: string }) => name)
      .join(", ") + ", ...more";

  // const addMovie = async () => {
  //   if (!isInList) await addToList(data);
  //   refetch();
  // };

  // const removeMovie = async () => {
  //   if (isInList) await removeFromList(data?.id.toString() || "");
  //   refetch();
  // };

  return (
    <CardInfo>
      <p>
        <b>{data?.title}</b>
      </p>

      {isDisplay && (
        <div>
          <FaPlay />
          {/* {isInList ? (
            <FaCheck onClick={removeMovie} />
          ) : (
            <FaPlus onClick={addMovie} />
          )} */}
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
