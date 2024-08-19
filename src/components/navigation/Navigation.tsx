import { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { NavContainer } from "./Navigation-style";
import Footer from "../footer/Footer";
import NavigationMenu from "./NavigationMenu";
import { useAppDispatch } from "../../store/store";
import { removeQueryNresult } from "../../store/slices/persistedSlice";

const Navigation = () => {
  const [navBg, setNavBg] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const backToMainMenu = () => {
    if (pathname !== "/") {
      dispatch(removeQueryNresult());
      navigate("/");
    }
  };

  useEffect(() => {
    const handleTransition = () => setNavBg(window.scrollY > 30 ? true : false);

    window.addEventListener("scroll", handleTransition);

    return () => window.removeEventListener("scroll", handleTransition);
  }, []);

  return (
    <>
      <NavContainer $bgCol={navBg}>
        <h1 onClick={backToMainMenu}>nextflip</h1>
        <NavigationMenu />
      </NavContainer>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navigation;
