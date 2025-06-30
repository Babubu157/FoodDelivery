import { OrderModel } from "../../model/order.model";
import { Request, Response } from "express";

export const createOrder = async (request: Request, response: Response) => {
  const { totalPrice, orderItems, address } = request.body;
  const { userId } = response.locals;

  try {
    await OrderModel.create({ user: userId, totalPrice, orderItems, address });
    response.status(200).send({ message: "Success" });
    return;
  } catch (error) {
    console.log(error);

    response.status(400).send({ message: "Order uusgehed aldaa garlaa" });
  }
};
