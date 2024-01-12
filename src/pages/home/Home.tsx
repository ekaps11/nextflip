import Faq from "../../components/faq/Faq";
import { HomeContainer } from "./Home-style";
import SignUp from "../../components/sign-up/SignUp";
import { useTranslation } from "react-i18next";
import Plan from "../../components/plan/Plan";
import Games from "../../components/games/Games";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <HomeContainer>
        <div>
          <h1>{t("Home.title")}</h1>
          <p className="description">{t("Home.desc")}</p>
          <SignUp />
        </div>
      </HomeContainer>
      <Plan
        title={t("plan.title")}
        items={t("plan.items", { returnObjects: true })}
      />
      <Games />
      <Plan
        title={t("join.title")}
        items={t("join.items", { returnObjects: true })}
      />
      <Faq />
    </>
  );
};

export default Home;
