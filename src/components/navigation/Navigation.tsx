import { Outlet, Link } from "react-router-dom";
import { NavContainer } from "./Navigation.styles";
import Header1 from "../header/Header1";
import Select from "../select/Select";
import Button from "../button/Button";
import Footer from "../footer/Footer";
import { languages } from "../../assets/data";

const Navigation = () => {
  return (
    <>
      <NavContainer>
        <Link to="/">
          <Header1>nextflip</Header1>
        </Link>

        <div>
          <Select options={languages} />
          <Button title="sign in" />
        </div>
      </NavContainer>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navigation;
