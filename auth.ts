// import NextAuth from "next-auth";
// import Credentials from "next-auth/providers/credentials";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import bcrypt from "bcrypt";
// import { prisma } from "@/src/server/repos/prisma";

// export const { handlers, auth, signIn, signOut } = NextAuth({
//   adapter: PrismaAdapter(prisma),
//   session: { strategy: "database" },
//   pages: {
//     signIn: "/login",
//   },
//   providers: [
//     Credentials({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         const email = (credentials?.email || "")
//           .toString()
//           .toLowerCase()
//           .trim();
//         const password = (credentials?.password || "").toString();

//         if (!email || !password) return null;

//         const user = await prisma.user.findUnique({ where: { email } });
//         if (!user?.passwordHash) return null;

//         const ok = await bcrypt.compare(password, user.passwordHash);
//         if (!ok) return null;

//         // NextAuth ожидает объект user (минимум id)
//         return {
//           id: user.id,
//           name: user.name,
//           email: user.email,
//           // кастомные поля можно вернуть, но мы лучше добавим их в session callback ниже
//         };
//       },
//     }),
//   ],
//   callbacks: {
//     async session({ session, user }) {
//       // добавляем в session.user нужные поля
//       (session.user as any).id = user.id;
//       (session.user as any).isSuperAdmin = (user as any).isSuperAdmin ?? false;
//       return session;
//     },
//   },
// });
