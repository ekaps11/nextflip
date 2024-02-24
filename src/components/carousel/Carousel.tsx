import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Movie, image, useGetMovieQuery } from "../../utils/tmdb";
import Card from "../card/Card";
import CustomArrow from "./CustomArrow";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { CarouselContainer, Title, CardSlider } from "./Carousel-style";

type CarouselProps = { url: string; title: string };

const Carousel = ({ url, title }: CarouselProps) => {
  const [isShow, setIsShow] = useState(false);
  const { data } = useGetMovieQuery(url);
  const desktopMode = navigator.userAgent.includes("Windows");

  const settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: <CustomArrow icon={<FaChevronLeft />} />,
    nextArrow: <CustomArrow icon={<FaChevronRight />} />,
    beforeChange: () => setIsShow(true),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  const getMovies = () => {
    const movies = data?.results.map(({ id, backdrop_path, title }: Movie) =>
      desktopMode ? (
        <Card key={id} id={id} />
      ) : (
        <img key={id} src={image + backdrop_path} alt={title} />
      )
    );

    return desktopMode ? (
      <Slider {...settings}>{movies}</Slider>
    ) : (
      <CardSlider>{movies}</CardSlider>
    );
  };

  return (
    <CarouselContainer $isShow={isShow}>
      <Title>{title}</Title>
      {getMovies()}
    </CarouselContainer>
  );
};

export default Carousel;
