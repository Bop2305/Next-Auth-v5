import NextAuth, { DefaultSession, NextAuthConfig, Session } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { NextResponse } from "next/server";
import { login } from "./services/AuthService";

const config = {
  providers: [
    Credentials({
      async authorize(credentials, request) {
        console.log("[Credentials] credentials", credentials);
        //console.log("[Credentials] request", request);
        try {
          const { username, password } = credentials as any;
          const res = await login({ username, password });
          console.log("[Credentials] data", res?.data);
          return res?.data ?? null;
        } catch (error: any) {
          console.error("[Login] [Error]:", error.response.data.message);
          return null;
        }
      },
    }),
    Google,
  ],
  pages: {
    signIn: "/auth/sign-in",
  },
  callbacks: {
    async authorized({ request, auth }) {
      //console.log("[authorized] request", request);
      console.log("[authorized] auth", auth);
      const isLoggedIn = !!auth?.user;

      return isLoggedIn;
    },
    async jwt({ token, user, session }) {
      console.log("[jwt] [token]", token);
      console.log("[jwt] [user]", user);
      console.log("[jwt] [session]", session);
      if (user) {
        token = {
          ...token,
          ...user,
          accessToken: token?.token
        };
      }

      return token;
    },
    redirect({ baseUrl }) {
      return baseUrl + "/dashboard";
    },
    session: ({ session, token, user }): any => {
      console.log("[session] session", session);
      console.log("[session] token", token);
      console.log("[session] user", user);
      if(token) {
        session.user = token as any
        session.accessToken = token?.accessToken as string & DefaultSession
      }
      return session;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
