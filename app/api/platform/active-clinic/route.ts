import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { auth } from "@/auth";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) return new NextResponse("Unauthorized", { status: 401 });

  const isSuperAdmin = session.user.isSuperAdmin === true;
  if (!isSuperAdmin) return new NextResponse("Forbidden", { status: 403 });

  const body = await req.json().catch(() => null);
  const clinicId = body?.clinicId as string | undefined;

  if (!clinicId) return new NextResponse("clinicId required", { status: 400 });
  const cookieStore = await cookies();
  cookieStore.set("active_clinic_id", clinicId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return NextResponse.json({ ok: true });
}
