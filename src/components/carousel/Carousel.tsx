import { RefObject, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetMovieQuery } from "../../utils/tmdb";
import Card from "../card/Card";
import CustomArrow from "./CustomArrow";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { CarouselContainer, Title } from "./Carousel-style";

type CarouselProps = { url: string; title: string };

const Carousel = ({ url, title }: CarouselProps) => {
  const ref: RefObject<Slider> = useRef(null);
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
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false,
          swipeToSlide: true,
          swipe: true,
        },
      },
    ],
  };

  return (
    <CarouselContainer $isShow={isShow}>
      <Title>{title}</Title>
      <Slider ref={ref} {...settings}>
        {data?.results.map(({ id }: { id: number }) => (
          <Card key={id} id={id} />
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default Carousel;
