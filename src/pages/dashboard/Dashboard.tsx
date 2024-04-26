import { useGetMovieQuery, MOVIE_REQUESTS, Movie } from "../../utils/tmdb";
import { getRandomNumber } from "../../utils/helper/helper";
import { DashboardBg, MoviesContainer } from "./Dashboard-style";
import MovieDetail from "../../components/movie-detail/MovieDetail";
import Carousel from "../../components/carousel/Carousel";
import { t } from "i18next";
import Spinner from "../../components/spinner/Spinner";

const Dashboard = () => {
  const { data, isLoading } = useGetMovieQuery(MOVIE_REQUESTS.POPULAR);

  const filteredMovie: Movie[] = data?.results
    .slice(5)
    .filter(({ overview }: { overview: string }) => overview?.length < 350);

  const movie = filteredMovie?.at(
    getRandomNumber(filteredMovie?.length)
  ) as Movie;

  if (!movie) return;
  if (isLoading) return <Spinner />;

  return (
    <>
      <DashboardBg $bg={movie?.backdrop_path}>
        <MovieDetail id={movie?.id} title={movie?.title} />
      </DashboardBg>

      <MoviesContainer>
        <Carousel url={MOVIE_REQUESTS.POPULAR} title={t("dashboard.popular")} />
        <Carousel url={MOVIE_REQUESTS.TOP_RATED} title={t("dashboard.top")} />
        <Carousel
          url={MOVIE_REQUESTS.ANIMATION}
          title={t("dashboard.animation")}
        />
        <Carousel
          url={MOVIE_REQUESTS.INDONESIAN}
          title={t("dashboard.indonesian")}
        />
        <Carousel url={MOVIE_REQUESTS.KOREAN} title={t("dashboard.korean")} />
      </MoviesContainer>
    </>
  );
};

export default Dashboard;
