import { useState } from "react";
import { Help, Article } from "./SignIn-style";
import CustomLink from "../custom-link/CustomLink";

const SignInDetail = () => {
  const [learnMore, setLearnMore] = useState(true);

  const toggleDetail = () => setLearnMore(false);

  return (
    <>
      <Help>
        <label htmlFor="remember">
          <input id="remember" type="checkbox" defaultChecked />
          Remember me
        </label>
        <CustomLink
          to="https://www.netflix.com/id-en/LoginHelp"
          children="Need help?"
          target="_blank"
        />
      </Help>

      <p>
        New to Netflix? <CustomLink to="/">Sign up now.</CustomLink>
      </p>
      <Article>
        This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
        <span onClick={toggleDetail}>
          {learnMore ? (
            "Learn more."
          ) : (
            <p>
              <br />
              The information collected by Google reCAPTCHA is subject to the
              Google{" "}
              <CustomLink
                to={"https://policies.google.com/privacy"}
                target="_blank"
              >
                Privacy Policy
              </CustomLink>{" "}
              and{" "}
              <CustomLink
                to={"https://policies.google.com/terms"}
                target="_blank"
              >
                Terms of Service
              </CustomLink>
              , and is used for providing, maintaining, and improving the
              reCAPTCHA service and for general security purposes (it is not
              used for personalized advertising by Google).
            </p>
          )}
        </span>
      </Article>
    </>
  );
};

export default SignInDetail;
