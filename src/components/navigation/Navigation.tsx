import { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { NavContainer, ProfileIcon } from "./Navigation-style";
import Footer from "../footer/Footer";
import { t } from "i18next";
import Button from "../button/Button";
import ProfilePanel from "../profile-panel/ProfilePanel";
import Searchbar from "../searchbar/Searchbar";
import SelectLanguage from "../select/SelectLanguage";
import { useAppSelector } from "../../store/store";

const Navigation = () => {
  const [navBg, setNavBg] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user } = useAppSelector(({ user }) => user);

  const backToMainMenu = () => {
    if (pathname !== "/") {
      navigate("/");
      location.reload();
    }
  };

  useEffect(() => {
    const handleTransition = () => setNavBg(window.scrollY > 20 ? true : false);

    window.addEventListener("scroll", handleTransition);

    return () => window.removeEventListener("scroll", handleTransition);
  }, [pathname]);

  return (
    <>
      <NavContainer $bgCol={navBg}>
        <h1 onClick={backToMainMenu}>nextflip</h1>

        <div>
          {!user && pathname !== "/login" && (
            <>
              <SelectLanguage id="header-language" />
              <Button onClick={() => navigate("/login")}>{t("sign.in")}</Button>
            </>
          )}

          {user && (
            <>
              <Searchbar mouseEnter={() => setShowPanel(false)} />

              <ProfileIcon
                onMouseEnter={() => setShowPanel(true)}
                onClick={() => setShowPanel(!showPanel)}
              />

              <div
                onMouseEnter={() => setShowPanel(false)}
                style={{ opacity: "0" }}
              >
                '
              </div>

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
