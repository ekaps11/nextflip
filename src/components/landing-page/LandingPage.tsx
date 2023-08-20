import SignUp from "../sign-up/SignUp";
import { LandingPageContainer, Layout } from "./LandingPage-style";

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <Layout>
        <h1>Unlimited movies, TV shows, and more</h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <SignUp />
      </Layout>
    </LandingPageContainer>
  );
};

export default LandingPage;
