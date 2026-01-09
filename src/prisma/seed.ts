import { prisma } from "@/server/repos/prisma";
import bcrypt from "bcrypt";

async function main() {
  const email = "admin@local";
  const password = "admin123";

  const passwordHash = await bcrypt.hash(password, 10);

  await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      email,
      name: "Super Admin",
      passwordHash,
      isSuperAdmin: true,
    },
  });

  console.log("Seeded SUPER_ADMIN:", email, password);
}

main().finally(async () => prisma.$disconnect());
