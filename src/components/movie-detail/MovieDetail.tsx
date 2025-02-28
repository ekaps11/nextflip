import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import Button from "../button/Button";
import { t } from "i18next";
import { useGetMovieQuery, extendedUrl, image } from "../../utils/tmdb";
import { device, unscrolledModalEffect } from "../../utils/helper/helper";
import Modal from "../modal/Modal";
import {
  MovieDetailButton,
  MovieDetailContainer,
  MovieDetailModal,
} from "./MovieDetail-style";
import CardDetail from "../card/CardDetail";
import Spinner from "../spinner/Spinner";

type MovieDetailProps = {
  id: number;
  title: string;
  showButton?: boolean;
};

const MovieDetail = ({ id, title, showButton = true }: MovieDetailProps) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const strLength = title?.length;

  const { data, isLoading } = useGetMovieQuery(
    `movie/${id}/images${extendedUrl}&include_image_language=en`
  );

  const logoResult: string = data?.logos?.at(0)?.file_path;

  const MovieLogo = logoResult ? (
    <img src={image + logoResult} alt={title} />
  ) : (
    <h2>{title}</h2>
  );

  const { data: detail } = useGetMovieQuery(`movie/${id}${extendedUrl}`);

  const toggleModal = () => setShowModal(!showModal);

  (isLoading || !id) && <Spinner />;

  useEffect(() => {
    unscrolledModalEffect(showModal);
  }, [showModal]);

  return (
    <MovieDetailContainer $strLength={strLength}>
      <Modal isOpen={showModal} onClose={toggleModal}>
        <MovieDetailModal>
          <CardDetail data={detail} isDisplay={false} />
        </MovieDetailModal>
      </Modal>

      {MovieLogo}

      {showButton && (
        <MovieDetailButton>
          <Button onClick={() => !device && navigate(`/preview?movie=${id}`)}>
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
        </MovieDetailButton>
      )}
    </MovieDetailContainer>
  );
};

export default MovieDetail;
