import { useTranslation } from "react-i18next";
import CustomLink from "../custom-link/CustomLink";
import { Help } from "./SignIn-style";
import SignInArticle from "./SignInArticle";

const SignInDetail = () => {
  const { t } = useTranslation();

  return (
    <>
      <Help>
        <label htmlFor="remember">
          <input id="remember" type="checkbox" defaultChecked />
          {t("sign.checkbox")}
        </label>
        <CustomLink
          to="https://www.netflix.com/id-en/LoginHelp"
          target="_blank"
        >
          {t("sign.help")}?
        </CustomLink>
      </Help>
      <p>
        {t("sign.ask")}? <CustomLink to="/">{t("sign.up")}.</CustomLink>
      </p>
      <SignInArticle />
    </>
  );
};

export default SignInDetail;
