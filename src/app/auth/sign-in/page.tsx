import { redirect } from "next/navigation";
import { SignInPage } from "@/src/app/auth/sign-in/signin";

const SignIn: React.FC = async () => {
  // TODO: Check if user is authenticated
  const isAuthenticated = false; // Example for now
  // const isAuthenticated = await checkIsAuthenticated();

  if (isAuthenticated) {
    redirect("/dashboard");
  } else {
    return <SignInPage />;
  }
};

export default SignIn;
