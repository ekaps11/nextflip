import { ChangeEvent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaChevronRight } from "react-icons/fa";
import Button from "../button/Button";
import { SignUpContainer, SignUpForm } from "./SignUp-style";
import Input from "../input/Input";
import { useDispatch } from "react-redux";
import { setUser, setValidEmail } from "../../store/slices/userSlice";
import { useAppSelector } from "../../store/store";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const EmailSchema = z.object({
  email: z.string().email("Email is required!"),
  password: z
    .string()
    .min(6, "Password should be at least 6 characters")
    .max(15, "Password should be at most 15 characters"),
});

type Email = z.infer<typeof EmailSchema>;

const SignUp = () => {
  const dispatch = useDispatch();
  const { validEmail } = useAppSelector(({ user }) => user);
  const isEmailValid = validEmail.endsWith(".com");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Email>({
    resolver: zodResolver(EmailSchema),
  });

  const emailOnChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => dispatch(setValidEmail(value));

  const signUpHandler: SubmitHandler<Email> = (data) => {
    dispatch(setUser(data));
    dispatch(setValidEmail(""));
    reset();
  };

  return (
    <SignUpContainer>
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <SignUpForm onSubmit={handleSubmit(signUpHandler)}>
        <>
          <Input
            type="email"
            label="email address"
            {...register("email")}
            onChange={emailOnChange}
            errors={errors.email?.message}
          />
          {isEmailValid && (
            <Input
              type="password"
              label="password"
              {...register("password")}
              errors={errors.password?.message}
            />
          )}
        </>
        <>
          <Button>
            get started
            <FaChevronRight />
          </Button>
        </>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUp;
