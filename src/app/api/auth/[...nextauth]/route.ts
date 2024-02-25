import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { supabaseClient } from "@/util/supabase";
import bcrypt from "bcrypt";

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
        Email: { label: "PhoneNumber", type: "number" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const phoneNumber = credentials?.Email;
          const password = credentials?.password;

          if (phoneNumber === undefined || password === undefined) return null;

          const user = await supabaseClient.logIn({ password, phoneNumber });

          if (user === null) return null;

          const passwordNotValid = !(await bcrypt.compare(
            password,
            user.password,
          ));

          if (passwordNotValid) return null;

          const person = {
            id: user.id,
            name: user.lastName,
            email: user.phoneNumber.toString(),
          };

          return person;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
