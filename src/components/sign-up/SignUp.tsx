import { t } from "i18next";
import { SignUpContainer } from "./SignUp-style";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <SignUpContainer>
      <p>{t("signup.title")}</p>
      <SignUpForm />
    </SignUpContainer>
  );
};

export default SignUp;
