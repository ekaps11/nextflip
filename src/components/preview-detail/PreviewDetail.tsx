import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { getDuration } from "../../utils/helper/helper";
import { useGetMovieQuery, extendedUrl } from "../../utils/tmdb";
import { FaPlus, FaShare } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { AiOutlineRollback } from "react-icons/ai";
import {
  PreviewDetailContainer,
  TrailerYear,
  TrailerDetail,
  ActionButton,
} from "./PreviewDetail-style";
import { t } from "i18next";
import Spinner from "../spinner/Spinner";

type PreviewDetailProps = {
  movieID: string;
  movieDetail: {
    title: string;
    release_date: string;
    runtime: number;
    overview: string;
  };
};

const PreviewDetail = ({ movieID, movieDetail }: PreviewDetailProps) => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetMovieQuery(
    `movie/${movieID}/credits${extendedUrl}&language=en-US`
  );

  const overview =
    movieDetail?.overview.length > 400
      ? movieDetail?.overview.slice(0, 400)
      : movieDetail?.overview;

  const casts =
    data?.cast
      .slice(0, 5)
      .map(({ name }: { name: string }) => name)
      .join(", ") + ", ...more";

  const director = data?.crew.filter(
    ({ job }: { job: string }) => job === "Director"
  );

  if (isLoading) return <Spinner />;

  return (
    <PreviewDetailContainer>
      <h2>{movieDetail?.title}</h2>
      <TrailerYear>
        <p>{movieDetail?.release_date.slice(0, 4)}</p>
        <p>{getDuration(movieDetail?.runtime)}</p>
        <span>HD</span>
        <img src="images/spatial.png" alt={movieDetail?.title} />
      </TrailerYear>

      <Button onClick={() => navigate("/")}>
        <AiOutlineRollback />
        {t("preview.home")}
      </Button>

      <TrailerDetail>
        <p>{overview}</p>
        <p>
          {t("preview.cast")}: {casts}
        </p>
        <p>
          {t("preview.director")}: {director?.at(0)?.name}
        </p>
      </TrailerDetail>

      <ActionButton>
        <div>
          <FaPlus />
          <p>{t("preview.list")}</p>
        </div>

        <div>
          <SlLike />
          <p>{t("preview.rate")}</p>
        </div>

        <div>
          <FaShare />
          <p>{t("preview.share")}</p>
        </div>
      </ActionButton>
      <hr />
    </PreviewDetailContainer>
  );
};

export default PreviewDetail;
