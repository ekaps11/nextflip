import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { banner, extendedUrl, useGetMovieQuery } from "../../utils/tmdb";
import PreviewDetail from "../../components/preview-detail/PreviewDetail";
import PreviewRecommendation from "../../components/preview-recommendation/PreviewRecommendation";
import { PreviewContainer } from "./Preview-style";
import Spinner from "../../components/spinner/Spinner";

const Preview = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const movieID = searchParams.get("movie") as string;

  const { data } = useGetMovieQuery(`movie/${movieID}/videos${extendedUrl}`);

  const { data: detail, isLoading } = useGetMovieQuery(
    `movie/${movieID}${extendedUrl}`
  );

  const trailer = data?.results.filter(
    ({ name }: { name: string }) => name === "Official Trailer"
  );

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location]);

  if (isLoading) return <Spinner />;

  return (
    <PreviewContainer>
      {trailer?.at(0) ? (
        <iframe
          width="100%"
          src={`https://www.youtube.com/embed/${
            trailer?.at(0)?.key
          }?autoplay=1&mute=1&rel=0&showinfo=0&modestbranding=0`}
          frameBorder="0"
          allowFullScreen
        />
      ) : (
        <img
          className="banner"
          src={banner + detail?.backdrop_path}
          alt={detail?.title}
          loading="lazy"
        />
      )}

      <PreviewDetail movieID={movieID} movieDetail={detail} />

      <PreviewRecommendation
        movieID={movieID}
        title={detail?.title}
        genre={detail?.genres[0].id}
      />
    </PreviewContainer>
  );
};

export default Preview;
