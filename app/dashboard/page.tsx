import { auth } from "@/auth";
import Dashboard from "@/components/dashboard/Dashboard";

export default async function DashBoard() {
  const session = await auth();
  console.log("[DashBoard], [session]", session?.accessToken as any);

  return <Dashboard />;
}
