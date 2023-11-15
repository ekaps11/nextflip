import { BsFillPlayFill, BsInfoCircle } from "react-icons/bs";
import Button from "../../components/button/Button";
import {
  MoviePreviewButton,
  MoviePreviewContainer,
} from "./MoviePreview-style";
import { useTranslation } from "react-i18next";
import { image } from "../../utils/tmdb";

type MoviePreviewProps = {
  title: string | undefined;
  logo?: string;
};

const MoviePreview = ({ title, logo }: MoviePreviewProps) => {
  const { t } = useTranslation();
  const strLength = title?.length;

  const caption = logo?.includes(image + undefined) ? (
    <h2>{title}</h2>
  ) : (
    <img src={logo} alt={title} />
  );

  return (
    <MoviePreviewContainer $strLength={strLength}>
      {caption}
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
