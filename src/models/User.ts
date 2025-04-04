import mongoose, { Schema, model } from "mongoose";

export interface UserDocument {
  _id: string;
  email: string;
  password: string;
  nickname: string;
  createdAt: Date;
  updatedAt: Date;
  provider: string;
}

const UserSchema = new Schema<UserDocument>(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
    },
    password: {
      type: String,
    },
    nickname: {
      type: String,
      required: [true, "nickname is required"],
    },
    provider: {
      type: String,
      required: true,
      enum: ["credentials", "google", "kakao"],
    },
  },
  {
    timestamps: true,
  }
);

const User =
  mongoose.models?.User || model<UserDocument>("User", UserSchema, "user");
export default User;
