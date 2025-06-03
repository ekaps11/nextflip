import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";
import { BsInfoCircle } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { device, unscrolledModalEffect } from "../../utils/helper/helper";
import Button from "../button/Button";
import CardDetail from "../card/CardDetail";
import Modal from "../modal/Modal";
import {
  BannerContainer,
  ButtonContainer,
  MovieDetail,
  ModalContent,
} from "./Banner-style";
import { useGetMovieQuery, extendedUrl, image, Movie } from "../../api/tmdb";
import Spinner from "../spinner/Spinner";

type BannerProps = {
  movie: Movie;
  showButton?: boolean;
};

const Banner = ({ movie, showButton = true }: BannerProps) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const strLength = movie?.title?.length;

  const { data, isLoading } = useGetMovieQuery(
    `movie/${movie?.id}/images${extendedUrl}&include_image_language=en`
  );

  const logoResult: string = data?.logos?.at(0)?.file_path;

  const MovieLogo = logoResult ? (
    <img src={image + logoResult} alt={movie?.title} />
  ) : (
    <h2>{movie?.title}</h2>
  );

  const { data: detail } = useGetMovieQuery(`movie/${movie?.id}${extendedUrl}`);

  const toggleModal = () => setShowModal(!showModal);

  (isLoading || !movie?.id) && <Spinner />;

  useEffect(() => {
    unscrolledModalEffect(showModal);
  }, [showModal]);

  return (
    <BannerContainer $bg={movie?.backdrop_path}>
      <MovieDetail $strLength={strLength}>
        <Modal isOpen={showModal} onClose={toggleModal}>
          <ModalContent>
            <CardDetail data={detail} isDisplay={false} />
          </ModalContent>
        </Modal>

        {!isLoading && MovieLogo}

        {showButton && (
          <ButtonContainer>
            <Button
              onClick={() => !device && navigate(`/preview?movie=${movie?.id}`)}
            >
              <i>
                <FaPlay />
              </i>
              {t("dashboard.playButton")}
            </Button>

            <Button onClick={toggleModal} disabled={showModal}>
              <i>
                <BsInfoCircle />
              </i>
              {t("dashboard.infoButton")}
            </Button>
          </ButtonContainer>
        )}
      </MovieDetail>
    </BannerContainer>
  );
};

export default Banner;
