import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/util/prisma";
import { supaClient, supabaseClient } from "@/util/supabase";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        Email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials?.Email;
        const password = credentials?.password;

        if (email === undefined || password === undefined) return null;

        const user = await supabaseClient.signUp({ email, password });

        if (user === null) return null;

        const person = { id: user.id, name: user.id, email: user.email };

        return person;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
