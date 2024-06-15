import { useRef } from "react";
import { Movie, image, useGetMovieQuery } from "../../utils/tmdb";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { device } from "../../utils/helper/helper";
import Card from "../card/Card";
import CustomLink from "../custom-link/CustomLink";
import { CardSlider } from "./Carousel-style";

type CarouselProps = {
  url: string;
  title: string;
  settings: object;
};

const CarouselContent = ({ url, title, settings }: CarouselProps) => {
  const cardSliderRef = useRef<HTMLDivElement>(null);
  const { data } = useGetMovieQuery(url);

  const movies = data?.results.map(({ id, backdrop_path, title }: Movie) => {
    if (backdrop_path) {
      return device ? (
        <Card key={id} id={id} />
      ) : (
        <CustomLink
          key={id}
          to={{
            pathname: "/preview",
            search: `?movie=${id}`,
          }}
        >
          <img src={image + backdrop_path} alt={title} />
        </CustomLink>
      );
    }
  });

  return device ? (
    <Slider {...settings}>{movies}</Slider>
  ) : (
    <CardSlider id={title} ref={cardSliderRef}>
      <div>{movies}</div>
    </CardSlider>
  );
};

export default CarouselContent;
