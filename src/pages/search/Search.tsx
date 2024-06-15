import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { replaceAll, handleClickOutside } from "../../utils/helper/helper";
import { Movie, extendedUrl, useGetMovieQuery } from "../../utils/tmdb";
import { SearchContainer, SearchIcon, SearchInput } from "./Search-style";
import { setSearchedMovies } from "../../store/slices/persistedSlice";
import { useAppDispatch } from "../../store/store";

type SearchQuery = {
  q: string;
};

type SearchProps = {
  placeholder: string;
  mouseEnter?: () => void;
};

const Search = ({ placeholder, mouseEnter }: SearchProps) => {
  const [showInput, setShowInput] = useState(false);
  const [inputQuery, setInputQuery] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { register, handleSubmit, reset } = useForm<SearchQuery>();
  const { ref, ...rest } = register("q");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const query = replaceAll(inputQuery, "%20", " ");

  const newRef = (e: HTMLInputElement | null) => {
    ref(e);
    inputRef.current = e;
  };

  const onSubmit = ({ q }: SearchQuery) => {
    setInputQuery(replaceAll(q, " ", "%20"));
    reset();
  };

  const { data } = useGetMovieQuery(
    `search/multi${extendedUrl}&query=${inputQuery}&include_adult=false&language=en-US&page=1`
  );

  useEffect(() => {
    const searchResults: Movie[] = data?.results
      .map((props: Movie) => {
        const { name, known_for, backdrop_path, media_type } = props;
        const actor = name && name.toLowerCase();
        const query = inputQuery.replace("%20", " ");
        const movies: Movie[] = [];

        actor === query && movies.push(known_for);

        backdrop_path && media_type === "movie" && movies.push(props);

        return movies;
      })
      .flat(2)
      .filter(Boolean)
      .filter(
        ({ backdrop_path, genre_ids }: Movie) =>
          backdrop_path && genre_ids[0] !== 27
      );

    if (inputQuery) {
      searchResults?.length && setShowInput(false);
      dispatch(setSearchedMovies({ query, searchResults }));
      navigate(`/search?q=${inputQuery}`);
    }

    handleClickOutside(inputRef, () => setShowInput(false));
  }, [data?.results, dispatch, inputQuery, navigate, query]);

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
          <button
            type="submit"
            disabled={Boolean(inputQuery.length) && false}
          />
        </SearchInput>
      )}
    </SearchContainer>
  );
};

export default Search;
