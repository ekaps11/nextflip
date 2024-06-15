import { useState } from "react";
import CustomArrow from "./CustomArrow";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { CarouselContainer, Title } from "./Carousel-style";
import CarouselContent from "./CarouselContent";

type CarouselProps = {
  url: string;
  title: string;
};

const Carousel = ({ url, title }: CarouselProps) => {
  const [isShow, setIsShow] = useState(false);

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

  return (
    <CarouselContainer $isShow={isShow}>
      <Title>{title}</Title>
      <CarouselContent url={url} settings={settings} title={title} />
    </CarouselContainer>
  );
};

export default Carousel;
