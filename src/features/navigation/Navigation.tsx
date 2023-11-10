import { MouseEvent } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../store/store";
import { logOut } from "../../utils/firebase/firebase.utils";
import { NavContainer } from "./Navigation-style";
import Footer from "../footer/Footer";
import Button from "../../components/button/Button";
import CustomLink from "../../components/custom-link/CustomLink";
import SelectLanguage from "../../components/select/SelectLanguage";

const Navigation = () => {
  const isMatched = useLocation().pathname === "/";
  const navigate = useNavigate();
  const { user } = useAppSelector(({ user }) => user);
  const { t } = useTranslation();

  const toggleButton = t(!user ? "sign.in" : "sign.out");

  const handleClick = ({
    currentTarget: { name: buttonName },
  }: MouseEvent<HTMLButtonElement>) => {
    buttonName === t("sign.in") ? navigate("/login") : logOut();
  };

  return (
    <>
      <NavContainer>
        <CustomLink to="/">
          <h1>nextflip</h1>
        </CustomLink>
        {isMatched && (
          <div>
            <SelectLanguage id="nav-lang" />
            <Button name={toggleButton} onClick={handleClick}>
              {toggleButton}
            </Button>
          </div>
        )}
      </NavContainer>
      <Outlet />
      {isMatched && <Footer />}
    </>
  );
};

export default Navigation;
