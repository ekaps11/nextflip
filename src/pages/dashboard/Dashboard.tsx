import { useGetMovieQuery, MOVIE_REQUESTS, Movie } from "../../utils/tmdb";
import { getRandomNumber } from "../../utils/helper/helper";
import { DashboardBg, MoviesContainer } from "./Dashboard-style";
import MoviePreview from "../../components/movie-detail/MovieDetail";
import Carousel from "../../components/carousel/Carousel";

const Dashboard = () => {
  const { data } = useGetMovieQuery(MOVIE_REQUESTS.POPULAR);
  const movies: Movie = data?.results[getRandomNumber(data?.results.length)];

  return (
    <>
      <DashboardBg $bg={movies?.backdrop_path}>
        <MoviePreview id={movies?.id} title={movies?.title} />
      </DashboardBg>

      <MoviesContainer>
        <Carousel url={MOVIE_REQUESTS.POPULAR} title="Popular on Nextflip" />
        <Carousel url={MOVIE_REQUESTS.TOP_RATED} title="Top Rated Movies" />
        <Carousel url={MOVIE_REQUESTS.ANIMATION} title="Animation" />
        <Carousel url={MOVIE_REQUESTS.INDONESIAN} title="Indonesian Movies" />
        <Carousel url={MOVIE_REQUESTS.KOREAN} title="Korean Movies" />
      </MoviesContainer>
    </>
  );
};

export default Dashboard;
