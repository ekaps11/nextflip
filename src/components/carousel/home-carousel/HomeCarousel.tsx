import { useState, useRef, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  image,
  Movie,
  MOVIE_REQUESTS,
  useGetMovieQuery,
} from "../../../utils/tmdb";
import {
  Detail,
  HomeCarouselContainer,
  HomeMoviesContainer,
} from "./HomeCarousel-style";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CustomArrow from "../CustomArrow";
import Spinner from "../../spinner/Spinner";
import Slider from "react-slick";
import Modal from "../../modal/Modal";
import { t } from "i18next";
import { unscrolledModalEffect } from "../../../utils/helper/helper";
import Banner from "../../banner/Banner";

const HomeCarousel = () => {
  const [currSlide, setCurrSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [movieDetail, setMovieDetail] = useState<Movie>();
  const sliderRef = useRef<Slider>(null);
  const { data, isLoading } = useGetMovieQuery(MOVIE_REQUESTS.POPULAR);
  const rawData = data?.results?.slice(0, 10);

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    swipe: true,
    swipeToSlide: true,
    prevArrow: <CustomArrow icon={<FaChevronLeft />} />,
    nextArrow: <CustomArrow icon={<FaChevronRight />} />,
    afterChange: (index: number) => setCurrSlide(index),
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const toggleModal = () => setShowModal(!showModal);

  const movie = rawData?.map((detail: Movie) => {
    const { id, poster_path, title } = detail;

    const handleClick = () => {
      toggleModal();
      setMovieDetail(detail);
    };

    return (
      <div key={id}>
        <img src={image + poster_path} alt={title} onClick={handleClick} />
      </div>
    );
  });

  const releaseDate = movieDetail?.release_date.slice(0, 4);

  const getGenres = movieDetail?.genre_ids
    .slice(0, 2)
    .map((id: number) => <p key={id}>{t(`genres.${id}`)}</p>);

  useEffect(() => {
    unscrolledModalEffect(showModal);
  }, [showModal]);

  if (isLoading) return <Spinner />;

  return (
    <HomeCarouselContainer>
      <Modal isOpen={showModal} onClose={toggleModal} useBackdrop={false}>
        {movieDetail && (
          <>
            <Banner movie={movieDetail} showButton={false} />

            <Detail>
              <div>
                <p>{releaseDate}</p>
                {getGenres}
              </div>
              <p>{movieDetail.overview}</p>
            </Detail>
          </>
        )}
      </Modal>

      <HomeMoviesContainer
        ref={sliderRef}
        {...settings}
        $slideIndex={currSlide}
      >
        {movie}
      </HomeMoviesContainer>
    </HomeCarouselContainer>
  );
};

export default HomeCarousel;
