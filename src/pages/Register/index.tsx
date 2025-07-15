import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Navigate } from "react-router-dom";
import { useRegisterMutation } from "@api/auth/mutations";
import UsernameInput from "@pages/Register/Inputs/Username";
import EmailInput from "@pages/Register/Inputs/Email";
import PasswordInput from "@pages/Register/Inputs/Password";
import ConfirmPasswordInput from "@pages/Register/Inputs/ConfirmPassword";
import { FormProvider } from "react-hook-form";

import Button from "@common/Button";
import { z } from "zod";
import Header from "@pages/Register/Header";
import Footer from "@pages/Register/Footer";
import UsernameError from "@pages/Register/Errors/Username";
import EmailError from "@pages/Register/Errors/Email";
import PasswordError from "@pages/Register/Errors/Password";
import ConfirmPasswordError from "@pages/Register/Errors/ConfirmPassword";
import ApiErrorModal from "@common/Modals/ApiErrorModal";

const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters" })
      .max(20, { message: "Username must be at most 20 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/,
        {
          message:
            "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
        }
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterInput = z.infer<typeof registerSchema>;

function Register() {
  const methods = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const {
    mutate: register,
    isPending,
    isSuccess,
    error,
  } = useRegisterMutation();

  const onSubmit = (data: RegisterInput) => {
    register({
      username: data.username,
      email: data.email,
      password: data.password,
    });
  };

  if (isSuccess) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-base-100 flex items-start justify-center">
      <div className="max-w-2xl w-full space-y-8 p-8 bg-base-200 rounded-xl shadow-lg mt-10 px-16">
        <Header />

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
            <UsernameInput />
            <UsernameError />
            <EmailInput />
            <EmailError />
            <PasswordInput />
            <PasswordError />
            <ConfirmPasswordInput />
            <ConfirmPasswordError />
            <Button
              type="submit"
              className="ml-auto rounded-full"
              disabled={isPending}
              variant="primary"
              size="md"
            >
              Create Account
            </Button>
          </form>
        </FormProvider>

        {error && (
          <ApiErrorModal
            statusCode={(error as any).response.status}
            message={(error as any).response.data.error}
          />
        )}
        <Footer />
      </div>
    </div>
  );
}

export default Register;
