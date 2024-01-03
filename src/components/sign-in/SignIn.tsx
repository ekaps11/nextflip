import { useState, useEffect } from "react";
import { SignInContainer } from "./SignIn-style";
import { useForm } from "react-hook-form";
import Button from "../button/Button";
import Input from "../input/Input";
import SignInDetail from "./SignInDetail";
import SignInError from "./SignInError";
import { Email, EmailSchema } from "../../utils/zod/schemes";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "../../utils/firebase/firebase.utils";
import { useAppSelector } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SignIn = () => {
  const [authError, setAuthError] = useState("");
  const navigate = useNavigate();
  const { user } = useAppSelector(({ user }) => user);
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Email>({
    resolver: zodResolver(EmailSchema),
  });

  const handleSignIn = ({ email, password }: Email) => {
    login(email, password, setAuthError);
    reset();
  };

  useEffect(() => {
    user && navigate("/");
    if (user) window.location.reload();
  }, [user, navigate]);

  return (
    <SignInContainer onSubmit={handleSubmit(handleSignIn)}>
      <h1>{t("sign.in")}</h1>
      {authError && <SignInError error={authError} />}
      <Input
        type="email"
        label={t("sign.email")}
        errors={errors.email?.message}
        borderBottom={Boolean(errors.email)}
        {...register("email")}
      />
      <Input
        type="password"
        label="Password"
        errors={errors.password?.message}
        borderBottom={Boolean(errors.password)}
        {...register("password")}
      />
      <Button>{t("sign.in")}</Button>
      <SignInDetail />
    </SignInContainer>
  );
};

export default SignIn;
