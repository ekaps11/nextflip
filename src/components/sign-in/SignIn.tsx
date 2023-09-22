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

const SignIn = () => {
  const [authError, setAuthError] = useState("");
  const navigate = useNavigate();
  const { user } = useAppSelector(({ user }) => user);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Email>({
    resolver: zodResolver(EmailSchema),
  });

  const signInHandler = ({ email, password }: Email) => {
    login(email, password, setAuthError);
    reset();
  };

  useEffect(() => {
    user && navigate("/");
  }, [user, navigate]);

  return (
    <SignInContainer onSubmit={handleSubmit(signInHandler)}>
      <h1>Sign In</h1>
      {authError && <SignInError error={authError} />}
      <Input
        type="email"
        label="email or phone number"
        errors={errors.email?.message}
        borderBottom={Boolean(errors.email)}
        {...register("email")}
      />
      <Input
        type="password"
        label="password"
        errors={errors.password?.message}
        borderBottom={Boolean(errors.password)}
        {...register("password")}
      />
      <Button>sign in</Button>
      <SignInDetail />
    </SignInContainer>
  );
};

export default SignIn;
