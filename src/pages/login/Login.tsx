import { LoginContainer } from "./Login-style";
import SignIn from "../../components/sign-in/SignIn";
import Footer from "../../components/footer/Footer";

const Login = () => {
  return (
    <LoginContainer>
      <SignIn />
      <Footer />
    </LoginContainer>
  );
};

export default Login;
