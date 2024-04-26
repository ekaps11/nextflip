import { t } from "i18next";
import { Movie, extendedUrl, image, useGetMovieQuery } from "../../utils/tmdb";
import CustomLink from "../custom-link/CustomLink";
import { Recommendation } from "./PreviewRecommendation-style";

type PreviewRecommendationProps = {
  movieID: string | null;
  title: string;
  genre: number;
};

const PreviewRecommendation = ({
  movieID,
  title,
  genre,
}: PreviewRecommendationProps) => {
  const { data } = useGetMovieQuery(
    `movie/${movieID}/recommendations${extendedUrl}`
  );

  const recommendations = data?.results
    .slice(0, 6)
    .map(({ id, title, backdrop_path }: Movie) => {
      if (backdrop_path)
        return (
          <CustomLink
            key={id}
            to={{ pathname: "/preview", search: `?movie=${id}` }}
          >
            <img src={image + backdrop_path} alt={title} />
          </CustomLink>
        );
    });

  const { data: otherRecommendations } = useGetMovieQuery(
    `discover/movie${extendedUrl}&
    with_genres=${genre}}`
  );

  const other = otherRecommendations?.results
    .filter(
      ({ original_language }: { original_language: string }) =>
        original_language === "en"
    )
    .slice(0, 6)
    .map(({ id, title, backdrop_path }: Movie) => {
      if (backdrop_path)
        return (
          <CustomLink
            key={id}
            to={{ pathname: "/preview", search: `?movie=${id}` }}
          >
            <img src={image + backdrop_path} alt={title} />
          </CustomLink>
        );
    });

  return (
    <Recommendation>
      <h3>
        {t("preview.more")} {title}
      </h3>
      <div>{recommendations?.length ? recommendations : other}</div>
    </Recommendation>
  );
};

export default PreviewRecommendation;
