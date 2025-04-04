"use server";
import { connectDB } from "@/lib/database";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const register = async (values: any) => {
  const { email, password, nickname } = values;

  try {
    await connectDB();
    const userFound = await User.findOne({ email, provider: "credentials" });
    if (userFound) {
      return {
        error: "Email already exists!",
      };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      email,
      password: hashedPassword,
      nickname,
      provider: "credentials",
    });
    await user.save();
  } catch (e) {
    console.log(e);
  }
};
