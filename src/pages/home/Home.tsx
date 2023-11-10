import StoryCard from "../../features/story-card/StoryCard";
import Faq from "../../features/faq/Faq";
import { HomeContainer, Layout } from "./Home-style";
import SignUp from "../../features/sign-up/SignUp";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <HomeContainer>
        <Layout>
          <h1>{t("Home.title")}</h1>
          <p>{t("Home.desc")}</p>
          <SignUp />
        </Layout>
      </HomeContainer>
      <StoryCard />
      <Faq />
    </>
  );
};

export default Home;
