import { useTranslation } from "react-i18next";
import SignUp from "../sign-up/SignUp";
import { LandingPageContainer, Layout } from "./LandingPage-style";

const LandingPage = () => {
  const { t } = useTranslation();

  return (
    <LandingPageContainer>
      <Layout>
        <h1>{t("landingPage.title")}</h1>
        <p>{t("landingPage.desc")}</p>
        <SignUp />
      </Layout>
    </LandingPageContainer>
  );
};

export default LandingPage;
