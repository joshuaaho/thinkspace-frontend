import { FormProvider, useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { useLoginMutation } from "@api/auth/mutations";
import UsernameInput from "@pages/Login/Username";
import PasswordInput from "@pages/Login/Password";
import Button from "@common/Button";
import { LoginCommand } from "@api/apiClient";
import Footer from "@pages/Login/Footer";
import Header from "@pages/Login/Header";
import ApiErrorModal from "@common/Modals/ApiErrorModal";
function Login() {
  const methods = useForm<LoginCommand>();

  const { mutate: login, isPending, isSuccess, error } = useLoginMutation();

  if (isSuccess) {
    return <Navigate to="/" />;
  }
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8 bg-base-200 rounded-xl shadow-lg">
        <Header />
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit((data) => login(data))}
            className="space-y-6"
          >
            <UsernameInput />
            <PasswordInput />

            <Button
              type="submit"
              className="ml-auto rounded-full"
              disabled={isPending}
              variant="primary"
              size="md"
            >
              Sign In
            </Button>
            {error && (
          <ApiErrorModal
            statusCode={(error as any).response.status}
            message={(error as any).response.data.error}
          />
        )}
          </form>
        </FormProvider>
        <Footer />
      </div>
      
    </div>
  );
}

export default Login;
