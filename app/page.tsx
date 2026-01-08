import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { cookies } from "next/headers";

export default async function Home() {
  const session = await auth();

  if (!session?.user) redirect("/login");

  if (session.user.isSuperAdmin) {
    const activeClinic = cookies().get("active_clinic_id")?.value;
    if (!activeClinic) redirect("/superadmin/clinics");
    redirect("/calendar");
  }

  redirect("/calendar");
}
