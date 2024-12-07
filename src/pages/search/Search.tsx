import { useMemo } from "react";
import { t } from "i18next";
import { NoResult, SearchContainer, SearchResults } from "./Search-style";
import { Movie, useSearchMoviesQuery } from "../../utils/tmdb";
import Spinner from "../../components/spinner/Spinner";
import Card from "../../components/card/Card";
import CustomLink from "../../components/custom-link/CustomLink";
import { device } from "../../utils/helper/helper";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  const movieResults = searchParams.get("q") as string;

  const { data, isLoading } = useSearchMoviesQuery(movieResults);

  const searchResults = useMemo(() => {
    if (!data || !data.results) return [];

    return data.results
      .flatMap((props: Movie) => {
        const { name, known_for, backdrop_path, media_type } = props;
        const actor = name && name.toLowerCase();
        const q = movieResults.replace("%20", " ");
        const movies: Movie[] = [];

        if (actor === q) {
          if (Array.isArray(known_for)) {
            movies.push(...known_for);
          } else {
            movies.push(known_for);
          }
        }

        if (backdrop_path && media_type === "movie") {
          movies.push(props);
        }

        return movies;
      })
      .filter(
        (movie: Movie) => movie?.backdrop_path && movie?.genre_ids[0] !== 27
      );
  }, [data, movieResults]);

  const movie = searchResults.map(({ id, backdrop_path }: Movie) => {
    const url = `/preview?movie=${id}`;

    if (backdrop_path) {
      return device ? (
        <Card key={id} id={id} />
      ) : (
        <CustomLink key={id} to={url}>
          <Card id={id} />
        </CustomLink>
      );
    }
  });

  if (isLoading) return <Spinner />;

  return (
    <SearchContainer>
      {searchResults.length ? (
        <p>
          {t("search.results")} "{movieResults}"
        </p>
      ) : (
        <NoResult>
          <h2>
            {t("search.noResult")} "{movieResults}"
          </h2>
          <p>{t("search.tryAgain")}</p>
        </NoResult>
      )}

      <SearchResults>{movie}</SearchResults>
    </SearchContainer>
  );
};

export default Search;
