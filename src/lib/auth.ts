import { connectDB } from "@/lib/database";
import User from "@/models/User";
import type { NextAuthOptions } from "next-auth";
import credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    credentials({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();
        const user = await User.findOne({
          email: credentials?.email,
        }).select("+password");

        if (!user) throw new Error("Wrong Email");

        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          user.password
        );

        if (!passwordMatch) throw new Error("Wrong Password");
        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.user = {
          _id: user._id,
          email: user.email,
          provider: account?.provider,
        };
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
    async signIn({ user, account }) {
      await connectDB();
      try {
        const existingUser = await User.findOne({ email: user.email });
        if (
          !existingUser ||
          (existingUser && existingUser.provider != account?.provider)
        ) {
          const newUser = new User({
            email: user.email,
            nickname: user.name,
            provider: account?.provider,
          });
          await newUser.save();
        }
        return true;
      } catch (error) {
        console.error("Error saving user:", error);
        return false;
      }
    },
    async redirect({ url, baseUrl }) {
      return baseUrl + "/";
    },
  },
  events: {},
};
