import { Request, Response } from "express";
import { UserModel } from "../../model/users.model";
import bcrypt from "bcrypt";

export const signup = async (request: Request, response: Response) => {
  const { email, password } = request.body;
  const isEmailExist = await UserModel.findOne({ email });

  if (!isEmailExist) {
    const hashedPassword = bcrypt.hashSync(password, 10);
    await UserModel.create({ email, password: hashedPassword });

    response.send({ message: "Successfully registered" });
    return;
  }
  response.status(400).send({ message: "User already exist" });
};
