import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Article } from "./SignIn-style";
import CustomLink from "../custom-link/CustomLink";

const SignInArticle = () => {
  const [isShow, setIsShow] = useState(true);
  const { t } = useTranslation();

  const toggleDetail = () => setIsShow(false);

  return (
    <Article>
      {t("sign.desc")}.{" "}
      <span onClick={toggleDetail}>
        {isShow ? (
          t("sign.learn")
        ) : (
          <p>
            {t("sign.detail1")}{" "}
            <CustomLink
              to={"https://policies.google.com/privacy"}
              target="_blank"
            >
              {t("sign.link1")}
            </CustomLink>{" "}
            {t("sign.linkHub")}{" "}
            <CustomLink
              to={"https://policies.google.com/terms"}
              target="_blank"
            >
              {t("sign.link2")}
            </CustomLink>
            , {t("sign.detail2")}.
          </p>
        )}
      </span>
    </Article>
  );
};

export default SignInArticle;
