import { useNavigate, useSearchParams } from "react-router-dom";
import { banner, extendedUrl, useGetMovieQuery } from "../../utils/tmdb";
import PreviewDetail from "../../components/preview-detail/PreviewDetail";
import PreviewRecommendation from "../../components/preview-recommendation/PreviewRecommendation";
import Footer from "../../components/footer/Footer";
import { IoIosArrowRoundBack } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { PreviewContainer, PreviewNav } from "./Preview-style";

const Preview = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const movieID = searchParams.get("movie");

  const { data } = useGetMovieQuery(`movie/${movieID}/videos${extendedUrl}`);

  const { data: detail } = useGetMovieQuery(`movie/${movieID}${extendedUrl}`);

  const trailer = data?.results.filter(
    ({ name }: { name: string }) => name === "Official Trailer"
  );

  return (
    <PreviewContainer>
      <PreviewNav>
        <IoIosArrowRoundBack onClick={() => navigate(-1)} />
        <HiMagnifyingGlass />
      </PreviewNav>

      {trailer?.at(0) ? (
        <iframe
          width="100%"
          src={`https://www.youtube.com/embed/${
            trailer?.at(0)?.key
          }?autoplay=1&mute=1&rel=0&showinfo=0&modestbranding=0`}
          frameBorder="0"
          allowFullScreen
          title={detail?.title}
        />
      ) : (
        <img
          className="banner"
          src={banner + detail?.backdrop_path}
          alt={detail?.title}
        />
      )}

      <PreviewDetail movieID={movieID} movieDetail={detail} />
      <PreviewRecommendation movieID={movieID} title={detail?.title} />
      <Footer />
    </PreviewContainer>
  );
};

export default Preview;
