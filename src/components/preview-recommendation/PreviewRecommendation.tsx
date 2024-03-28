import { Movie, extendedUrl, image, useGetMovieQuery } from "../../utils/tmdb";
import CustomLink from "../custom-link/CustomLink";
import { Recommendation } from "./PreviewRecommendation-style";

type PreviewRecommendationProps = {
  movieID: string | null;
  title: string;
};

const PreviewRecommendation = ({
  movieID,
  title,
}: PreviewRecommendationProps) => {
  const { data: recommendation } = useGetMovieQuery(
    `movie/${movieID}/recommendations${extendedUrl}`
  );

  const recommendations = recommendation?.results
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
      <h3>More Like {title}</h3>
      <div>{recommendations}</div>
    </Recommendation>
  );
};

export default PreviewRecommendation;
