import { useSearchParams } from "react-router-dom";
import { BrowseContainer, MoviesContainer } from "./Browse-style";
import { extendedUrl, Movie, useGetMovieQuery } from "../../api/tmdb";
import Banner from "../../components/banner/Banner";
import { getRandomNumber } from "../../utils/helper/helper";
import Carousel from "../../components/carousel/Carousel";
import Spinner from "../../components/spinner/Spinner";
import { t } from "i18next";

const Browse = () => {
  const [searchParams] = useSearchParams();
  const genreID = searchParams.get("genre");
  const url = `discover/movie${extendedUrl}&page=1&with_genres=${genreID}`;
  const { data, isLoading } = useGetMovieQuery(url);
  const movieResults = data?.results;

  const getGenre = Object.entries(t("genres", { returnObjects: true }))
    .find(([id]) => id === genreID)
    ?.at(1);

  const movie =
    movieResults &&
    (movieResults.at(getRandomNumber(movieResults.length)) as Movie);

  const getPages = (pageNumber: number) =>
    `discover/movie${extendedUrl}&page=${pageNumber}&with_genres=${genreID}`;

  if (isLoading) return <Spinner />;

  return (
    <BrowseContainer>
      <Banner movie={movie} />
      <h3>{getGenre}</h3>
      <MoviesContainer>
        {Array.from({ length: 5 }).map((_, index) => (
          <Carousel key={index} url={getPages(++index)} />
        ))}
      </MoviesContainer>
    </BrowseContainer>
  );
};

export default Browse;
