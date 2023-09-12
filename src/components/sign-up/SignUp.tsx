import { SignUpContainer } from "./SignUp-style";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <SignUpContainer>
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <SignUpForm />
    </SignUpContainer>
  );
};

export default SignUp;
