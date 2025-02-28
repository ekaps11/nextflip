import Faq from "../../components/faq/Faq";
import {
  Header,
  HomeContainer,
  PlanBox,
  PlanContainer,
  TrendingMovies,
} from "./Home-style";
import SignUp from "../../components/sign-up/SignUp";
import { t } from "i18next";
import HomeCarousel from "../../components/carousel/home-carousel/HomeCarousel";

const Home = () => {
  return (
    <HomeContainer>
      <Header>
        <div>
          <h1>{t("home.title")}</h1>
          <p>{t("home.desc")}</p>
          <SignUp />
        </div>
      </Header>

      <TrendingMovies>
        <img src="images/down-light.png" alt="curved-line" />

        <div>
          <h2>{t("home.trend")}</h2>
          <HomeCarousel />
        </div>
      </TrendingMovies>

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
