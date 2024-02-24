import { MOVIE_REQUESTS } from "../../utils/tmdb";
import Carousel from "../carousel/Carousel";
import { MoviesContainer } from "./Movies-style";

const Movies = () => {
  return (
    <MoviesContainer>
      <Carousel url={MOVIE_REQUESTS.POPULAR} title="Popular on Nextflip" />
      <Carousel url={MOVIE_REQUESTS.INDONESIAN} title="Indonesian Movies" />
      <Carousel url={MOVIE_REQUESTS.UPCOMING} title="Upcoming Movies" />
    </MoviesContainer>
  );
};

export default Movies;
