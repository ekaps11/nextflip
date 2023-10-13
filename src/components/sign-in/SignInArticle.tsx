import { useState } from "react";
import { Article } from "./SignIn-style";
import CustomLink from "../custom-link/CustomLink";

const SignInArticle = () => {
  const [isShow, setIsShow] = useState(true);

  const toggleDetail = () => setIsShow(false);

  return (
    <Article>
      This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
      <span onClick={toggleDetail}>
        {isShow ? (
          "Learn more."
        ) : (
          <p>
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
            reCAPTCHA service and for general security purposes (it is not used
            for personalized advertising by Google).
          </p>
        )}
      </span>
    </Article>
  );
};

export default SignInArticle;
