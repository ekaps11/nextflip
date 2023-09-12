import { SignInContainer } from "./SignIn-style";
import { useForm } from "react-hook-form";
import Button from "../button/Button";
import Input from "../input/Input";
import SignInDetail from "./SignInDetail";
import { Email, EmailSchema } from "../../utils/zod/schemes";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "../../utils/firebase/firebase.utils";
import { useAppDispatch } from "../../store/store";
import { setUser } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Email>({
    resolver: zodResolver(EmailSchema),
  });

  const signInHandler = ({ email, password }: Email) => {
    dispatch(setUser(login(email, password)));
    navigate("/");

    reset();
  };

  return (
    <SignInContainer onSubmit={handleSubmit(signInHandler)}>
      <h1>Sign In</h1>
      <Input
        type="email"
        label="email or phone number"
        errors={errors.email?.message}
        {...register("email")}
      />
      <Input
        type="password"
        label="password"
        errors={errors.password?.message}
        {...register("password")}
      />
      <Button>sign in</Button>
      <SignInDetail />
    </SignInContainer>
  );
};

export default SignIn;
