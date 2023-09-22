import { MouseEvent } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { NavContainer } from "./Navigation-style";
import { languages } from "../../assets/data";
import { useAppSelector } from "../../store/store";
import { logOut } from "../../utils/firebase/firebase.utils";
import Select from "../select/Select";
import Footer from "../footer/Footer";
import Button from "../button/Button";
import CustomLink from "../custom-link/CustomLink";

const Navigation = () => {
  const isMatched = useLocation().pathname === "/";
  const navigate = useNavigate();
  const { user } = useAppSelector(({ user }) => user);

  const buttonToggler = `sign ${!user ? "in" : "out"}`;

  const clickHandler = ({
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
            <Select id="languages" options={languages} />
            <Button name={buttonToggler} onClick={clickHandler}>
              {buttonToggler}
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
