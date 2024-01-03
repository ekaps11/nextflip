import Carousel from "../carousel/Carousel";
import { MOVIE_REQUESTS } from "../../utils/tmdb";
import { MoviesContainer } from "./Movies-style";

const Movies = () => {
  return (
    <MoviesContainer>
      <Carousel title="Trending" movieUrl={MOVIE_REQUESTS.TRENDING} />
      <Carousel title="Popular" movieUrl={MOVIE_REQUESTS.POPULAR} />
      <Carousel
        title="Indonesian Movies"
        movieUrl={MOVIE_REQUESTS.INDONESIAN}
      />
    </MoviesContainer>
  );
};

export default Movies;
