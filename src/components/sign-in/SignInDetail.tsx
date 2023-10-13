import CustomLink from "../custom-link/CustomLink";
import { Help } from "./SignIn-style";
import SignInArticle from "./SignInArticle";

const SignInDetail = () => {
  return (
    <>
      <Help>
        <label htmlFor="remember">
          <input id="remember" type="checkbox" defaultChecked />
          Remember me
        </label>
        <CustomLink
          to="https://www.netflix.com/id-en/LoginHelp"
          target="_blank"
        >
          Need help?
        </CustomLink>
      </Help>
      <p>
        New to Netflix? <CustomLink to="/">Sign up now.</CustomLink>
      </p>
      <SignInArticle />
    </>
  );
};

export default SignInDetail;
