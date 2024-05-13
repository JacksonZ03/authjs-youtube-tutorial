import { DashboardPage } from "@/src/app/dashboard/dashboard";
import { redirect } from "next/navigation";

const Dashboard: React.FC = async () => {
  // TODO: Check if user is authenticated
  const isAuthenticated = true; // Example for now
  // const isAuthenticated = await checkIsAuthenticated();

  if (!isAuthenticated) {
    redirect("/auth/sign-in");
  } else {
    return <DashboardPage />;
  }
};

export default Dashboard;
