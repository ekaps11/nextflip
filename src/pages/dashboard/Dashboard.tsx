import { useGetMovieQuery, MOVIE_REQUESTS, Movie } from "../../utils/tmdb";
import { getRandomNumber } from "../../utils/helper/helper";
import { DashboardContainer, MoviesContainer } from "./Dashboard-style";
import Carousel from "../../components/carousel/Carousel";
import { t } from "i18next";
import Spinner from "../../components/spinner/Spinner";
import Banner from "../../components/banner/Banner";

const Dashboard = () => {
  const { data, isLoading } = useGetMovieQuery(MOVIE_REQUESTS.POPULAR);

  const filteredMovie: Movie[] = data?.results
    .slice(5)
    .filter(({ overview }: { overview: string }) => overview?.length < 350);

  const movie = filteredMovie?.at(
    getRandomNumber(filteredMovie?.length)
  ) as Movie;

  if (isLoading) return <Spinner />;

  return (
    <DashboardContainer>
      <Banner movie={movie} />

      <MoviesContainer>
        <Carousel url={MOVIE_REQUESTS.POPULAR} title={t("dashboard.popular")} />
        <Carousel url={MOVIE_REQUESTS.TOP_RATED} title={t("dashboard.top")} />
        <Carousel
          url={MOVIE_REQUESTS.ANIMATION}
          title={t("dashboard.animation")}
        />
        <Carousel url={MOVIE_REQUESTS.ANIME} title="Anime" />
        <Carousel
          url={MOVIE_REQUESTS.INDONESIAN}
          title={t("dashboard.indonesian")}
        />
        <Carousel url={MOVIE_REQUESTS.KOREAN} title={t("dashboard.korean")} />
      </MoviesContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
