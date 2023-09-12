import { ChangeEvent, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import Button from "../button/Button";
import Input from "../input/Input";
import { Email, EmailSchema } from "../../utils/zod/schemes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AuthError, Form } from "./SignUp-style";
import { signUpWithEmail } from "../../utils/firebase/firebase.utils";

const SignUpForm = () => {
  const [isEmailValid, setIsEmailValid] = useState("");
  const validEmail = isEmailValid.endsWith(".com");
  const [authError, setAuthError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      touchedFields: { email, password },
    },
  } = useForm<Email>({
    resolver: zodResolver(EmailSchema),
  });

  const emailOnChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => setIsEmailValid(value);

  const signUpHandler = ({ email, password }: Email) => {
    signUpWithEmail(email, password, setAuthError);
    setIsEmailValid("");
    reset();
  };

  return (
    <>
      {authError && <AuthError>{authError}</AuthError>}
      <Form onSubmit={handleSubmit(signUpHandler)}>
        <Input
          type="email"
          label="email address"
          {...register("email", { onChange: emailOnChange })}
          errors={email && errors.email?.message}
        />
        {validEmail && (
          <Input
            type="password"
            label="password"
            {...register("password")}
            errors={password && errors.password?.message}
          />
        )}
        <Button>
          get started
          <FaChevronRight />
        </Button>
      </Form>
    </>
  );
};

export default SignUpForm;
