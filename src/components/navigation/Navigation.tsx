import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { NavContainer, NavLogo } from "./Navigation-style";
import Footer from "../footer/Footer";
import NavigationMenu from "./NavigationMenu";

const Navigation = () => {
  const [navBg, setNavBg] = useState(false);
  const isMatched = useLocation().pathname === "/";

  const handleTransition = () => setNavBg(window.scrollY > 30 ? true : false);

  useEffect(() => {
    window.addEventListener("scroll", handleTransition);
  }, []);

  return (
    <>
      <NavContainer $bgCol={navBg}>
        <NavLogo to="/">
          <h1>nextflip</h1>
        </NavLogo>
        {isMatched && <NavigationMenu />}
      </NavContainer>
      <Outlet />
      {isMatched && <Footer />}
    </>
  );
};

export default Navigation;
