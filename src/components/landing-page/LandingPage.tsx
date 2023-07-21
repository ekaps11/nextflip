import Header1 from "../header/Header1";
import Paragraph from "../paragraph/Paragraph";
import { LandingPageContainer, Layout } from "./LandingPage-style";

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <Layout>
        <Header1>Unlimited movies, TV shows, and more</Header1>
        <Paragraph>Watch anywhere. Cancel anytime.</Paragraph>
      </Layout>
    </LandingPageContainer>
  );
};

export default LandingPage;
