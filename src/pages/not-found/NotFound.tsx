import { t } from "i18next";
import Button from "../../components/button/Button";
import Link from "../../components/custom-link/CustomLink";
import { NotFoundContainer, NotFoundContent } from "./NotFound-style";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <h1>{t("notFound.header")}?</h1>
      <NotFoundContent>
        <p>{t("notFound.desc")}.</p>
        <Link to="/">
          <Button>{t("notFound.button")}</Button>
        </Link>
        <p>
          {t("notFound.errCode")} <strong>NSES-404</strong>
        </p>
      </NotFoundContent>
    </NotFoundContainer>
  );
};

export default NotFound;
