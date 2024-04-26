import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import Button from "../button/Button";
import { t } from "i18next";
import { useGetMovieQuery, extendedUrl, image } from "../../utils/tmdb";
import { device } from "../../utils/helper/helper";
import Modal from "../modal/Modal";
import {
  MovieDetailButton,
  MovieDetailContainer,
  MovieDetailModal,
} from "./MovieDetail-style";
import CardDetail from "../card/CardDetail";

type MovieDetailProps = {
  id: number;
  title: string;
};

const MovieDetail = ({ id, title }: MovieDetailProps) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const strLength = title?.length;

  const { data } = useGetMovieQuery(
    `movie/${id}/images${extendedUrl}&include_image_language=en`
  );

  const logo = image + data?.logos?.at(0)?.file_path;

  const { data: detail } = useGetMovieQuery(`movie/${id}${extendedUrl}`);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <MovieDetailContainer $strLength={strLength}>
      <Modal isOpen={showModal} onClose={toggleModal}>
        <MovieDetailModal>
          <CardDetail data={detail} isDisplay={false} />
        </MovieDetailModal>
      </Modal>
      {data?.logos?.length ? <img src={logo} alt={title} /> : <h2>{title}</h2>}

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
    </MovieDetailContainer>
  );
};

export default MovieDetail;
