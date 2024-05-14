import { getUserRole } from "@/src/lib/auth/getUserRoleServerAction";
import { redirect } from "next/navigation";
import { AdminPage } from "@/src/app/admin/admin";

const Admin: React.FC = async () => {
  const role = await getUserRole();

  if (role === "ADMIN") {
    return <AdminPage />;
  } else {
    redirect("/dashboard");
  }
};

export default Admin;
