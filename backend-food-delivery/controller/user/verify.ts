import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const verify = async (request: Request, response: Response) => {
  const { token } = request.body;
  const tokenPassword = "FoodDelivery";

  try {
    const isValid = jwt.verify(token, tokenPassword);
    // console.log(token, "token");

    if (isValid) {
      const destructToken: any = jwt.decode(token);
      response.send({ destructToken });

      return;
    } else {
      response.status(401).send({ message: "token is not valid" });
      return;
    }
  } catch (err) {
    response.status(401).send({ message: "token is not valid" });
    return;
  }
};
