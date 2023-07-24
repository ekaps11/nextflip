import { Outlet, Link } from "react-router-dom";
import { NavContainer } from "./Navigation.styles";
import Select from "../select/Select";
import Footer from "../footer/Footer";
import { languages } from "../../assets/data";
import { Box } from "../../GlobalStyles";

const Navigation = () => {
  return (
    <>
      <NavContainer>
        <Link to="/">
          <h1>nextflip</h1>
        </Link>

        <Box>
          <Select options={languages} />
          <button>sign in</button>
        </Box>
      </NavContainer>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navigation;
