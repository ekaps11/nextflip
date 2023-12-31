import { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { NavContainer, Profile } from "./Navigation-style";
import Footer from "../footer/Footer";
import Button from "../button/Button";
import CustomLink from "../custom-link/CustomLink";
import SelectLanguage from "../select/SelectLanguage";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { setProfilePanel } from "../../store/slices/uiSlice";
import ManageProfile from "../manage-profile/ManageProfile";

const Navigation = () => {
  const dispatch = useAppDispatch();
  const [navBg, setNavBg] = useState(false);
  const isMatched = useLocation().pathname === "/";
  const navigate = useNavigate();
  const { user } = useAppSelector(({ user }) => user);
  const { profilePanel } = useAppSelector(({ ui }) => ui);
  const { t } = useTranslation();

  const login = () => navigate("/login");

  const showProfilePanel = () => {
    dispatch(setProfilePanel(!profilePanel));
  };

  const handleTransition = () => setNavBg(window.scrollY > 30 ? true : false);

  useEffect(() => {
    window.addEventListener("scroll", handleTransition);
  }, []);

  return (
    <>
      <NavContainer $bgCol={navBg}>
        <CustomLink to="/">
          <h1>nextflip</h1>
        </CustomLink>
        {isMatched && (
          <div>
            {!user ? (
              <>
                <SelectLanguage id="nav-lang" />
                <Button onClick={login}>{t("sign.in")}</Button>
              </>
            ) : (
              <>
                <HiMagnifyingGlass size="1.8em" />
                <Profile
                  src={`images/profile.webp`}
                  alt="profile"
                  onClick={showProfilePanel}
                />
              </>
            )}
          </div>
        )}
        <ManageProfile />
      </NavContainer>
      <Outlet />
      {isMatched && <Footer />}
    </>
  );
};

export default Navigation;
