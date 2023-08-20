import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { NotFoundContainer, NotFoundContent } from "./NotFound-style";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <h1>Lost your way?</h1>
      <NotFoundContent>
        <p>
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </p>
        <Link to="/">
          <Button>netflix home</Button>
        </Link>
        <p>
          Error Code <strong>NSES-404</strong>
        </p>
      </NotFoundContent>
    </NotFoundContainer>
  );
};

export default NotFound;
