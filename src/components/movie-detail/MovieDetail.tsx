import { BsInfoCircle } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import Button from "../button/Button";
import { MovieDetailButton, MovieDetailContainer } from "./MovieDetail-style";
import { useTranslation } from "react-i18next";
import { useGetMovieQuery, extendedUrl, image } from "../../utils/tmdb";

type MovieDetailProps = {
  id: number;
  title: string;
};

const MovieDetail = ({ id, title }: MovieDetailProps) => {
  const { t } = useTranslation();
  const strLength = title?.length;

  const { data } = useGetMovieQuery(
    `movie/${id}/images${extendedUrl}&include_image_language=en`
  );

  const logo = image + data?.logos?.at(0)?.file_path;

  return (
    <MovieDetailContainer $strLength={strLength}>
      {data?.logos?.length ? <img src={logo} alt={title} /> : <h2>{title}</h2>}
      <MovieDetailButton>
        <Button>
          <i>
            <FaPlay />
          </i>
          {t("dashboard.playButton")}
        </Button>
        <Button>
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
