import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Movie, image, useGetMovieQuery } from "../../utils/tmdb";
import Card from "../card/Card";
import CustomArrow from "./CustomArrow";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { CarouselContainer, Title, CardSlider } from "./Carousel-style";
import CustomLink from "../custom-link/CustomLink";
import { device } from "../../utils/helper/helper";

type CarouselProps = { url: string; title: string };

const Carousel = ({ url, title }: CarouselProps) => {
  const [isShow, setIsShow] = useState(false);
  const { data } = useGetMovieQuery(url);

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
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  const getMovieList = () => {
    const movies = data?.results.map(({ id, backdrop_path, title }: Movie) => {
      if (backdrop_path)
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
    });

    return device ? (
      <Slider {...settings}>{movies}</Slider>
    ) : (
      <CardSlider>{movies}</CardSlider>
    );
  };

  return (
    <CarouselContainer $isShow={isShow}>
      <Title>{title}</Title>
      {getMovieList()}
    </CarouselContainer>
  );
};

export default Carousel;
