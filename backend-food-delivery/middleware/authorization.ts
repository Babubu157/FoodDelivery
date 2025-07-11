import { NextFunction, Request, Response } from "express";
import { UserModel, UserRoleEnum } from "../model/users.model";

export const isAdmin = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { userId } = response.locals;
  try {
    const user = await UserModel.findById({ _id: userId });
    if (!user) {
      response.status(404).send({ message: "User does not exist" });
    }

    if (user?.role === UserRoleEnum.ADMIN) {
      next();
      return;
    }
    response.status(401).send({ message: "Unauthorized user" });
    return;
  } catch (error) {
    response.status(404).send({ message: "Something went wrong" });
    return;
  }
};
