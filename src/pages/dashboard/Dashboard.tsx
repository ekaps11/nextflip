import { useState, useEffect } from "react";
import { useGetQuery, MOVIE_REQUESTS, image } from "../../utils/tmdb";
import { getRandomNumber } from "../../utils/helper/helper";
import { DashboardContainer } from "./Dashboard-style";
import MoviePreview from "../../features/movie-preview/MoviePreview";

export type Movie = {
  id: number;
  title: string;
  name: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
};

export type MovieDetail = {
  iso_639_1: string;
  file_path: string;
};

const Dashboard = () => {
  const { data } = useGetQuery(MOVIE_REQUESTS.TRENDING_OF_THE_DAY);
  const [movieObj, setMovieObj] = useState<Movie>();
  const movies: Movie[] = data?.results;

  // error trigger (404)
  const { data: getDetail } = useGetQuery(`movie/${movieObj?.id}/images`);

  const movieDetail: MovieDetail[] = getDetail?.logos.filter(
    (movies: MovieDetail) => movies.iso_639_1 === "en"
  );

  useEffect(() => {
    const randomNumber: number = getRandomNumber(movies?.length);
    const index = randomNumber === undefined ? 0 : randomNumber;

    setMovieObj(movies[index]);
  }, [movies]);

  return (
    <>
      <DashboardContainer $bg={movieObj?.backdrop_path}>
        <MoviePreview
          title={movieObj?.title ? movieObj?.title : movieObj?.name}
          logo={image + movieDetail?.at(0)?.file_path}
        />
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
