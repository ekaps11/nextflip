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
      {/* {!logo && <h2>{title}</h2>}
      {logo && <img src={logo} alt={title} height="300px" />} */}
      {caption}
      <MoviePreviewButton>
        <Button>
          <i>
            <BsFillPlayFill size="1.5em" />
          </i>
          {t("dashboard.playButton")}
        </Button>
        <Button>
          <i>
            <BsInfoCircle size="1.5em" />
          </i>
          {t("dashboard.infoButton")}
        </Button>
      </MoviePreviewButton>
    </MoviePreviewContainer>
  );
};

export default MoviePreview;
