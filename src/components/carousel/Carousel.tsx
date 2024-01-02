import { Movie, useGetMovieQuery, image } from "../../utils/tmdb";
import { CarouselContainer, CardSliderContainer } from "./Carousel-style";
import Card from "../card/Card";

type Carousel = {
  title: string;
  movieUrl: string;
};

const Carousel = ({ title, movieUrl }: Carousel) => {
  const { data } = useGetMovieQuery(movieUrl);
  const movies: Movie[] = data?.results.slice(0, 10);

  return (
    <CarouselContainer>
      <p>{title}</p>
      <CardSliderContainer>
        {movies.map(({ id, backdrop_path, title, name }) => (
          <Card
            key={id}
            posterUrl={image + backdrop_path}
            movieTitle={title || name}
          />
        ))}
      </CardSliderContainer>
    </CarouselContainer>
  );
};

export default Carousel;
