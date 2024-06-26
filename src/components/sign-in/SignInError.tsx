import { t } from "i18next";
import CustomLink from "../custom-link/CustomLink";
import { SignInErrorContainer } from "./SignIn-style";

type SignInErrorProps = { error: string };

const SignInError = ({ error }: SignInErrorProps) => {
  const errMsg = error.includes("password");
  const actionLinks = t(errMsg ? "error.resetPassword" : "error.signupFirst");
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
