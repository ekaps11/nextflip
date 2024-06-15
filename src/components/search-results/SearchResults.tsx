import Card from "../card/Card";
import { useAppSelector } from "../../store/store";
import { Movie } from "../../utils/tmdb";
import {
  MovieResults,
  NoResults,
  SearchResultsContainer,
} from "./SearchResults-style";
import { t } from "i18next";
import CustomLink from "../custom-link/CustomLink";
import { device } from "../../utils/helper/helper";

const SearchResults = () => {
  const { searchedMovies } = useAppSelector(({ persisted }) => persisted);
  const moviesLength = searchedMovies.searchResults.length;

  const movies = searchedMovies.searchResults.map(({ id }: Movie) =>
    device ? (
      <Card key={id} id={id} />
    ) : (
      <CustomLink
        key={id}
        to={{
          pathname: "/preview",
          search: `?movie=${id}`,
        }}
      >
        <Card key={id} id={id} />
      </CustomLink>
    )
  );

  return (
    <SearchResultsContainer>
      {moviesLength ? (
        <p>
          {t("search.results")} "{searchedMovies.query}"
        </p>
      ) : (
        ""
      )}
      <MovieResults>{movies}</MovieResults>

      {!moviesLength && (
        <NoResults>
          <h1>
            {t("search.noResults")} "{searchedMovies.query}"
          </h1>
          <p>{t("search.tryAgain")}</p>
        </NoResults>
      )}
    </SearchResultsContainer>
  );
};

export default SearchResults;
