import { useState, useEffect } from "react";
import { useGetMovieQuery, MOVIE_REQUESTS, Movie } from "../../utils/tmdb";
import { getRandomNumber } from "../../utils/helper/helper";
import { DashboardBg } from "./Dashboard-style";
import MoviePreview from "../../components/movie-preview/MoviePreview";
import Movies from "../../components/movies/Movies";

const Dashboard = () => {
  const { data } = useGetMovieQuery(MOVIE_REQUESTS.TRENDING);
  const [movieObj, setMovieObj] = useState<Movie>();
  const movies: Movie[] = data?.results;

  useEffect(() => {
    const index = getRandomNumber(movies?.length);

    setMovieObj(movies[index]);
  }, [movies]);

  if (!movieObj?.id) return movieObj?.id;

  return (
    <>
      <DashboardBg $bg={movieObj?.backdrop_path}>
        <MoviePreview
          id={movieObj?.id}
          title={movieObj?.title || movieObj?.name}
        />
      </DashboardBg>
      <Movies />
    </>
  );
};

export default Dashboard;
