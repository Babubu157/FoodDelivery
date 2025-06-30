import { model, Schema } from "mongoose";
import { User } from "./users.model";

export type Otp = {
  _id: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  otp: string;
  createdAt: Date;
};

export type OtpPopulated = {
  userId: User;
};

const Otp = new Schema<Otp>({
  otp: { type: String, require: true },
  userId: { type: Schema.ObjectId, require: true, ref: "Users" },
  createdAt: { type: Date, default: Date.now, expires: 300 },
});

export const OtpModel = model<Otp>("Otps", Otp);
