import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";
import useDebounce from "../../hooks/useDebounce";
import { handleClickOutside } from "../../utils/helper/helper";
import { SearchIcon, SearchInput, SearchbarContainer } from "./Searchbar-style";

type SearchQuery = {
  q: string;
};

type SearchbarProps = {
  mouseEnter: () => void;
};

const Searchbar = ({ mouseEnter }: SearchbarProps) => {
  const { debounce } = useDebounce();
  const navigate = useNavigate();
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { register, watch, reset } = useForm<SearchQuery>();
  const { ref, ...rest } = register("q");
  const query = watch("q", "");

  const newRef = (e: HTMLInputElement | null) => {
    ref(e);
    inputRef.current = e;
  };

  useEffect(() => {
    debounce(() => {
      if (query.length >= 3) {
        navigate(`search?q=${query}`);
        setShowInput(false);
        reset();
      }
    }, 700)();

    // toggle input
    handleClickOutside(inputRef, () => setShowInput(false));
  }, [debounce, navigate, query, reset]);

  return (
    <SearchbarContainer onMouseEnter={mouseEnter} $isShow={showInput}>
      <SearchIcon
        size="1.65em"
        onMouseEnter={mouseEnter}
        onClick={() => setShowInput(true)}
      />

      {showInput && (
        <SearchInput>
          <input
            type="search"
            placeholder={t("dashboard.search")}
            onMouseEnter={mouseEnter}
            autoFocus={showInput}
            autoComplete="off"
            {...rest}
            ref={newRef}
          />
        </SearchInput>
      )}
    </SearchbarContainer>
  );
};

export default Searchbar;
