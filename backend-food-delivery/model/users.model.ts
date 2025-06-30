import { model, Schema } from "mongoose";

export enum UserRoleEnum {
  USER = "USER",
  ADMIN = "ADMIN",
}

export type User = {
  _id: Schema.Types.ObjectId;
  email: String;
  password: String;
  phoneNumber?: String;
  address?: String;
  role: UserRoleEnum;
  isVerified: Boolean;
  createdAt: Date;
  updatedAt: Date;
};

const User = new Schema<User>({
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: false },
  address: { type: String, required: false },
  role: {
    type: String,
    enum: Object.values(UserRoleEnum),
    default: UserRoleEnum.USER,
    required: false,
  },
  isVerified: { type: Boolean, required: false },
  createdAt: { type: Date, default: Date.now, immutable: true },
  updatedAt: { type: Date, default: Date.now },
});

User.index({ email: 1 }, { unique: true });

export const UserModel = model<User>("Users", User);
