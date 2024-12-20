import Faq from "../../components/faq/Faq";
import { Header, HomeContainer, PlanBox, PlanContainer } from "./Home-style";
import SignUp from "../../components/sign-up/SignUp";
import { t } from "i18next";

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

      <PlanContainer>
        <h2>{t("storycard.title")}</h2>
        <div>
          {Object.values(t("storycard.items", { returnObjects: true })).map(
            ({ benefit, description }, i) => {
              return (
                <PlanBox key={benefit}>
                  <h3>{benefit}</h3>
                  <p>{description}</p>
                  <img src={`images/icon${++i}.webp`} alt={benefit} />
                </PlanBox>
              );
            }
          )}
        </div>
      </PlanContainer>

      <Faq />
    </HomeContainer>
  );
};

export default Home;
