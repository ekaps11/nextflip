import { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  BrowseIndicator,
  GenreLink,
  Left,
  NavContainer,
  ProfileIcon,
} from "./Navigation-style";
import Footer from "../footer/Footer";
import { t } from "i18next";
import Button from "../button/Button";
import ProfilePanel from "../profile-panel/ProfilePanel";
import Searchbar from "../searchbar/Searchbar";
import SelectLanguage from "../select/SelectLanguage";
import { useAppSelector } from "../../store/store";
import { BiSolidDownArrow } from "react-icons/bi";
import { device } from "../../utils/helper/helper";

const Navigation = () => {
  const [navBg, setNavBg] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [showGenre, setShowGenre] = useState(false);
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const { user } = useAppSelector(({ user }) => user);
  const currGenre = new URLSearchParams(search).get("genre");

  const backToMainMenu = () => {
    if (pathname !== "/") {
      navigate("/");
      showGenre === true && setShowGenre(false);
    }
  };

  const genres: [string, string][] = Object.entries(
    t("genres", { returnObjects: true })
  );

  const getAllGenres = genres.map(([id, genre]) => {
    const isActive = currGenre === id;

    const handleGenreClick = () => {
      if (!isActive) {
        navigate(`/browse?genre=${id}`);

        setTimeout(() => {
          location.reload();
        }, 100);
      }
    };

    return (
      <GenreLink key={id} onClick={handleGenreClick} $isSelected={isActive}>
        {genre}
      </GenreLink>
    );
  });

  const toggleMenus = (target: string) => {
    if (target === "genreDropdown") {
      setShowGenre(!showGenre);
      setShowPanel(false);
    } else if (target === "profilePanel") {
      setShowPanel(!showPanel);
      setShowGenre(false);
    } else if (target === "searchbar") {
      setShowPanel(false);
      setShowGenre(false);
    }
  };

  useEffect(() => {
    // navbar transition
    const handleTransition = () => setNavBg(window.scrollY > 20 ? true : false);

    window.addEventListener("scroll", handleTransition);

    return () => window.removeEventListener("scroll", handleTransition);
  }, []);

  return (
    <>
      <NavContainer $bgCol={navBg}>
        <Left onMouseLeave={() => device && setShowGenre(false)}>
          <h1 onClick={backToMainMenu} />
          {user && (
            <div
              onMouseEnter={() => setShowGenre(true)}
              onClick={() => !device && toggleMenus("genreDropdown")}
            >
              <div>
                <p>{t("preview.browse")}</p>
                <BiSolidDownArrow />
              </div>

              {showGenre && (
                <>
                  <BrowseIndicator size="0.8em" />
                  <div className="genres">
                    <div>{getAllGenres}</div>
                  </div>
                </>
              )}
            </div>
          )}
        </Left>

        <div>
          {!user && pathname !== "/login" && (
            <>
              <SelectLanguage id="header-language" />
              <Button onClick={() => navigate("/login")}>{t("sign.in")}</Button>
            </>
          )}

          {user && (
            <>
              <Searchbar mouseEnter={() => toggleMenus("searchbar")} />

              <ProfileIcon
                onMouseEnter={() => setShowPanel(true)}
                onClick={() => toggleMenus("profilePanel")}
              />

              {showPanel && (
                <ProfilePanel mouseLeave={() => setShowPanel(false)} />
              )}
            </>
          )}
        </div>
      </NavContainer>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navigation;
