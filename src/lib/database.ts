import mongoose from "mongoose";

const uri = process.env.MONGODB_URI as string;

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(uri);
    if (connection.readyState === 1) {
      return Promise.resolve(true);
    }
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};
