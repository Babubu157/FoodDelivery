import { Request, Response } from "express";
import { OrderModel } from "../../model/order.model";

export const getOrdersByUserId = async (
  _request: Request,
  response: Response
) => {
  const { userId } = response.locals;
  try {
    const allOrdersByUserId = await OrderModel.find({ user: userId }).populate({
      path: "orderItems",
      populate: {
        path: "food",
        model: "Foods",
      },
    });
    response.status(200).send({ orders: allOrdersByUserId });
  } catch (error) {
    response.send(400).send({ message: "Aldaa garlaa" });
  }
};
