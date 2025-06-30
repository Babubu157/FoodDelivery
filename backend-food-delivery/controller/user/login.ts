import { Request, Response } from "express";
import { UserModel } from "../../model/users.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (request: Request, response: Response) => {
  try {
    const { email, password } = request.body;

    const isEmailExist = await UserModel.findOne({ email });
    console.log(isEmailExist?.password);

    if (!isEmailExist) {
      response.status(404).send({ message: "Email of password not matching" });
      return;
    }

    const isPasswordCorrect = await bcrypt.compareSync(
      password,
      isEmailExist?.password.toString()
    );

    const tokenPassword = "FoodDelivery";
    if (isPasswordCorrect) {
      const token = jwt.sign(
        {
          userId: isEmailExist._id,
          isAdmin: isEmailExist.role === "ADMIN" ? true : false,
        },
        tokenPassword
      );
      response
        .status(200)
        .send({ message: "Successfully logged in", token: token });
      return;
    } else {
      response.status(404).send({ message: "Email of password not matching" });
    }
  } catch (error) {
    console.log(error);
  }
};
