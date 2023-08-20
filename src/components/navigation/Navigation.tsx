import { MouseEvent } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Select from "../select/Select";
import Footer from "../footer/Footer";
import Button from "../button/Button";
import { NavContainer } from "./Navigation.styles";
import { languages } from "../../assets/data";
import { useAppSelector } from "../../store/store";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";

const Navigation = () => {
  const isMatched = useLocation().pathname === "/";
  const dispatch = useDispatch();
  const { user } = useAppSelector(({ user }) => user);

  const buttonToggler = `sign ${
    Number(Object.keys(user)) === 0 ? "in" : "out"
  }`;

  const signOutHandler = ({
    currentTarget: { name },
  }: MouseEvent<HTMLButtonElement>) =>
    name === "sign out" && dispatch(setUser({}));

  console.log(user);

  return (
    <>
      <NavContainer>
        <Link to="/">
          <h1>nextflip</h1>
        </Link>
        {isMatched && (
          <div>
            <Select options={languages} />
            <Button name={buttonToggler} onClick={signOutHandler}>
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
