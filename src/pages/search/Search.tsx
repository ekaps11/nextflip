import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { replaceAll, handleClickOutside } from "../../utils/helper/helper";
import { Movie, extendedUrl, useGetMovieQuery } from "../../utils/tmdb";
import { SearchContainer, SearchIcon, SearchInput } from "./Search-style";
import { setQuery, setSearchResults } from "../../store/slices/persistedSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setIsLoading } from "../../store/slices/uiSlice";

type SearchQuery = {
  q: string;
};

type SearchProps = {
  placeholder: string;
  mouseEnter?: () => void;
};

const Search = ({ placeholder, mouseEnter }: SearchProps) => {
  const [showInput, setShowInput] = useState(false);
  const { query } = useAppSelector(({ persisted }) => persisted);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { register, handleSubmit, reset } = useForm<SearchQuery>();
  const { ref, ...rest } = register("q");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const newRef = (e: HTMLInputElement | null) => {
    ref(e);
    inputRef.current = e;
  };

  const onSubmit = ({ q }: SearchQuery) => {
    dispatch(setQuery(replaceAll(q, " ", "%20")));
    dispatch(setIsLoading(true));
    reset();
  };

  const { data } = useGetMovieQuery(
    `search/multi${extendedUrl}&query=${query}&include_adult=false&language=en-US&page=1`
  );

  useEffect(() => {
    const searchResults: Movie[] = data?.results
      .map((props: Movie) => {
        const { name, known_for, backdrop_path, media_type } = props;
        const actor = name && name.toLowerCase();
        const q = query?.replace("%20", " ");
        const movies: Movie[] = [];

        actor === q && movies.push(known_for);

        backdrop_path && media_type === "movie" && movies.push(props);

        return movies;
      })
      .flat(2)
      .filter(Boolean)
      .filter(
        ({ backdrop_path, genre_ids }: Movie) =>
          backdrop_path && genre_ids[0] !== 27
      );

    if (query) {
      searchResults?.length && setShowInput(false);
      dispatch(setSearchResults(searchResults));
      navigate(`/search?q=${query}`);
    }

    handleClickOutside(inputRef, () => setShowInput(false));
  }, [data?.results, dispatch, query, navigate]);

  return (
    <SearchContainer $isShow={showInput}>
      <SearchIcon
        size="1.65em"
        onMouseEnter={mouseEnter}
        onClick={() => setShowInput(true)}
      />

      {showInput && (
        <SearchInput onSubmit={handleSubmit(onSubmit)}>
          <input
            type="search"
            placeholder={placeholder}
            onMouseEnter={mouseEnter}
            autoFocus={showInput}
            autoComplete="off"
            {...rest}
            ref={newRef}
          />
          <button type="submit" disabled={Boolean(query) && false} />
        </SearchInput>
      )}
    </SearchContainer>
  );
};

export default Search;
