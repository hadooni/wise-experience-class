import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      _id: string;
      provider: string;
    } & DefaultSession["user"];
  }

  interface User {
    _id: string;
  }
}
