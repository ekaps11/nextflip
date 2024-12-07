import Faq from "../../components/faq/Faq";
import { Header, HomeContainer } from "./Home-style";
import SignUp from "../../components/sign-up/SignUp";
import { t } from "i18next";
import Plan from "../../components/plan/Plan";
import Games from "../../components/games/Games";

const Home = () => {
  return (
    <HomeContainer>
      <Header>
        <div>
          <h1>{t("Home.title")}</h1>
          <p className="description">{t("Home.desc")}</p>
          <SignUp />
        </div>
      </Header>
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
    </HomeContainer>
  );
};

export default Home;
