import NextAuth, { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import { NextResponse } from "next/server";

const config = {
  providers: [Google],
  callbacks: {
    async authorized({ request, auth }) {
      const isLoggedIn = !!auth?.user;

      return isLoggedIn;
    },
    redirect({ baseUrl }) {
      return baseUrl + "/dashboard";
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
