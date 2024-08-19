import Card from "../card/Card";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { Movie } from "../../utils/tmdb";
import {
  MovieResults,
  NoResults,
  SearchResultsContainer,
} from "./SearchResults-style";
import { t } from "i18next";
import CustomLink from "../custom-link/CustomLink";
import { device, replaceAll } from "../../utils/helper/helper";
import { removeQueryNresult } from "../../store/slices/persistedSlice";
import { useEffect } from "react";
import { setIsLoading } from "../../store/slices/uiSlice";
import Spinner from "../spinner/Spinner";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const { query, searchResults } = useAppSelector(({ persisted }) => persisted);
  const { isLoading } = useAppSelector(({ ui }) => ui);
  const moviesLength = searchResults.length;
  const movieTitle = replaceAll(query, "%20", " ");
  const dispatch = useAppDispatch();
  const location = useLocation();

  const removeQuery = () => dispatch(removeQueryNresult());

  const movies = searchResults.map(({ id }: Movie) =>
    device ? (
      <Card key={id} id={id} />
    ) : (
      <CustomLink
        key={id}
        to={{ pathname: "/preview", search: `?movie=${id}` }}
        onClick={removeQuery}
      >
        <Card key={id} id={id} />
      </CustomLink>
    )
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setIsLoading(false));
    }, 300);

    return () => clearTimeout(timeout);
  }, [dispatch, location]);

  return (
    <SearchResultsContainer>
      {isLoading && <Spinner />}
      {moviesLength ? (
        <p>
          {t("search.results")} "{movieTitle}"
        </p>
      ) : (
        ""
      )}
      <MovieResults>{movies}</MovieResults>

      {!moviesLength && (
        <NoResults>
          <h1>
            {t("search.noResults")} "{movieTitle}"
          </h1>
          <p>{t("search.tryAgain")}</p>
        </NoResults>
      )}
    </SearchResultsContainer>
  );
};

export default SearchResults;
