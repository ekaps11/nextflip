import { useTranslation } from "react-i18next";
import { SignUpContainer } from "./SignUp-style";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  const { t } = useTranslation();
  return (
    <SignUpContainer>
      <p>{t("signup.header")}</p>
      <SignUpForm />
    </SignUpContainer>
  );
};

export default SignUp;
