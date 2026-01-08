import { cookies } from "next/headers";
import { auth } from "@/auth";
import { prisma } from "@/src/server/repos/prisma";
import type { ClinicRole } from "@prisma/client";

export type Ctx = {
  userId: string;
  clinicId: string;
  role: "SUPER_ADMIN" | ClinicRole;
  isSuperAdmin: boolean;
};

export async function getCtx(): Promise<Ctx> {
  const session = await auth();
  if (!session?.user) throw new Error("UNAUTHENTICATED");

  const userId = session.user.id;
  const isSuperAdmin = session.user.isSuperAdmin === true;

  const cookieStore = await cookies();

  if (isSuperAdmin) {
    const clinicId = cookieStore.get("active_clinic_id")?.value;
    if (!clinicId) throw new Error("NO_ACTIVE_CLINIC");
    return { userId, clinicId, role: "SUPER_ADMIN", isSuperAdmin: true };
  }

  // MVP: пользователь в одной клинике
  const membership = await prisma.membership.findFirst({ where: { userId } });
  if (!membership) throw new Error("NO_MEMBERSHIP");

  return {
    userId,
    clinicId: membership.clinicId,
    role: membership.role,
    isSuperAdmin: false,
  };
}
