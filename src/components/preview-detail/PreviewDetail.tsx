import Button from "../button/Button";
import { getTime } from "../../utils/helper/helper";
import { useGetMovieQuery, extendedUrl } from "../../utils/tmdb";
import { FaPlay, FaPlus, FaShare } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import {
  PreviewDetailContainer,
  TrailerYear,
  TrailerDetail,
  ActionButton,
} from "./PreviewDetail-style";

type PreviewDetailProps = {
  movieID: string | null;
  movieDetail: {
    title: string;
    release_date: string;
    runtime: number;
    overview: string;
  };
};

const PreviewDetail = ({ movieID, movieDetail }: PreviewDetailProps) => {
  const { data: credits } = useGetMovieQuery(
    `movie/${movieID}/credits${extendedUrl}`
  );

  const casts =
    credits?.cast
      .slice(0, 5)
      .map(({ name }: { name: string }) => name)
      .join(", ") + ", ...more";

  const director = credits?.crew.filter(
    ({ job }: { job: string }) => job === "Director"
  );

  return (
    <PreviewDetailContainer>
      <h2>{movieDetail?.title}</h2>
      <TrailerYear>
        <p>{movieDetail?.release_date.slice(0, 4)}</p>
        <p>{getTime(movieDetail?.runtime)}</p>
        <span>HD</span>
        <img src="images/spatial.png" alt={movieDetail?.title} />
      </TrailerYear>

      <Button>
        <FaPlay />
        Play
      </Button>

      <TrailerDetail>
        <p>{movieDetail?.overview}</p>
        <p>Casts: {casts}</p>
        <p>Director: {director?.at(0)?.name}</p>
      </TrailerDetail>

      <ActionButton>
        <div>
          <FaPlus />
          <p>My List</p>
        </div>

        <div>
          <SlLike />
          <p>Rate</p>
        </div>

        <div>
          <FaShare />
          <p>Share</p>
        </div>
      </ActionButton>
      <hr />
    </PreviewDetailContainer>
  );
};

export default PreviewDetail;
