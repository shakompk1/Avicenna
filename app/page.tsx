import { redirect } from "next/navigation";
import { cookies } from "next/headers";
// import { auth } from "@/auth";

export default async function Home() {
  // const session = await auth();

  // if (!session?.user) redirect("/login");

  // if (session.user.isSuperAdmin) {
  //   const cookieStore = await cookies();
  //   const activeClinic = cookieStore.get("active_clinic_id")?.value;
  //   if (!activeClinic) redirect("/clinics");
  //   redirect("/calendar");
  // }

  redirect("/calendar");
}
