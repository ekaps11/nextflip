import { LoginContainer } from "./Login-style";
import SignIn from "../../features/sign-in/SignIn";
import Footer from "../../features/footer/Footer";

const Login = () => {
  return (
    <LoginContainer>
      <SignIn />
      <Footer />
    </LoginContainer>
  );
};

export default Login;
