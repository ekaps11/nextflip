import CustomLink from "../custom-link/CustomLink";
import { SignInErrorContainer } from "./SignIn-style";

const SignInError = ({ error }: { error: string }) => {
  const errMsg = error.includes("password");
  const actionLinks = errMsg ? "reset your password" : "sign up first";
  const links = errMsg ? "https://www.netflix.com/id-en/loginHelp" : "/";

  const errValidation = () => (error.includes("many") ? "" : actionLinks);

  return (
    <SignInErrorContainer>
      {error}
      {error && <CustomLink children={errValidation()} to={links} />}
    </SignInErrorContainer>
  );
};

export default SignInError;
