import { useRef } from "react";
import { Movie, image, useGetMovieQuery } from "../../utils/tmdb";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { device } from "../../utils/helper/helper";
import Card from "../card/Card";
import CustomLink from "../custom-link/CustomLink";
import { CardSlider } from "./Carousel-style";
import Spinner from "../spinner/Spinner";

type CarouselProps = {
  url: string;
  title: string;
  settings: object;
};

const CarouselContent = ({ url, title, settings }: CarouselProps) => {
  const cardSliderRef = useRef<HTMLDivElement>(null);
  const { data, isLoading } = useGetMovieQuery(url);

  const movies = data?.results.map(
    ({ id, backdrop_path, poster_path, title }: Movie) => {
      const url = `/preview?movie=${id}`;

      if (backdrop_path) {
        return device ? (
          <Card key={id} id={id} />
        ) : (
          <CustomLink key={id} to={url}>
            <img src={image + poster_path} alt={title} />
          </CustomLink>
        );
      }
    }
  );

  if (isLoading && device) return <Spinner />;

  return device ? (
    <Slider {...settings}>{movies}</Slider>
  ) : (
    <CardSlider id={title} ref={cardSliderRef}>
      <div>{movies}</div>
    </CardSlider>
  );
};

export default CarouselContent;
