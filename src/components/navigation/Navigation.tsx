import { MouseEvent } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { NavContainer } from "./Navigation-style";
import { useAppSelector } from "../../store/store";
import { logOut } from "../../utils/firebase/firebase.utils";
import Footer from "../footer/Footer";
import Button from "../button/Button";
import CustomLink from "../custom-link/CustomLink";
import SelectLanguage from "../select/SelectLanguage";

const Navigation = () => {
  const isMatched = useLocation().pathname === "/";
  const navigate = useNavigate();
  const { user } = useAppSelector(({ user }) => user);

  const toggleButton = `sign ${!user ? "in" : "out"}`;

  const handleClick = ({
    currentTarget: { name: buttonName },
  }: MouseEvent<HTMLButtonElement>) => {
    buttonName === "sign in" ? navigate("/login") : logOut();
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
