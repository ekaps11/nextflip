import { BsFillPlayFill, BsInfoCircle } from "react-icons/bs";
import Button from "../button/Button";
import {
  MoviePreviewButton,
  MoviePreviewContainer,
} from "./MoviePreview-style";
import { useTranslation } from "react-i18next";
import { useGetMovieQuery, extendedUrl, image } from "../../utils/tmdb";

type MoviePreviewProps = {
  id: number;
  title: string;
};

const MoviePreview = ({ id, title }: MoviePreviewProps) => {
  const { t } = useTranslation();
  const strLength = title.length;

  const { data } = useGetMovieQuery(
    `movie/${id}/images${extendedUrl}&include_image_language=en`
  );

  const logo = image + data?.logos?.at(0)?.file_path;

  return (
    <MoviePreviewContainer $strLength={strLength}>
      {data?.logos?.length ? <img src={logo} alt={title} /> : <h2>{title}</h2>}
      <MoviePreviewButton>
        <Button>
          <i>
            <BsFillPlayFill />
          </i>
          {t("dashboard.playButton")}
        </Button>
        <Button>
          <i>
            <BsInfoCircle />
          </i>
          {t("dashboard.infoButton")}
        </Button>
      </MoviePreviewButton>
    </MoviePreviewContainer>
  );
};

export default MoviePreview;
