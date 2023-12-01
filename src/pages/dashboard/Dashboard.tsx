import { useState, useEffect } from "react";
import { useGetMovieQuery, MOVIE_REQUESTS } from "../../utils/tmdb";
import { getRandomNumber } from "../../utils/helper/helper";
import { DashboardContainer } from "./Dashboard-style";
import MoviePreview from "../../features/movie-preview/MoviePreview";
import ManageProfile from "../../features/manage-profile/ManageProfile";

type Movie = {
  id: number;
  title: string;
  name: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  iso_639_1: string;
  file_path: string;
};

const Dashboard = () => {
  const { data } = useGetMovieQuery(MOVIE_REQUESTS.TRENDING_OF_THE_DAY);
  const movies: Movie[] = data?.results;
  const [movieObj, setMovieObj] = useState<Movie>();

  useEffect(() => {
    const index = getRandomNumber(movies.length);

    setMovieObj(movies[index]);
  }, [movies]);

  if (!movieObj?.id) return movieObj?.id;

  return (
    <>
      <ManageProfile />
      <DashboardContainer $bg={movieObj?.backdrop_path}>
        <MoviePreview
          id={movieObj?.id}
          title={movieObj?.title ? movieObj?.title : movieObj?.name}
        />
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
