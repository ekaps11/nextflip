import { useTranslation } from "react-i18next";
import SignUp from "../sign-up/SignUp";
import { LandingPageContainer, Layout } from "./LandingPage-style";

const LandingPage = () => {
  const { t } = useTranslation();

  return (
    <LandingPageContainer>
      <Layout>
        <h1>{t("landingPage.header")}</h1>
        <p>{t("landingPage.content")}</p>
        <SignUp />
      </Layout>
    </LandingPageContainer>
  );
};

export default LandingPage;
