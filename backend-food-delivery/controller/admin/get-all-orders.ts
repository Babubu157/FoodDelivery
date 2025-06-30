import { Request, Response } from "express";
import { OrderModel } from "../../model/order.model";

export const getAllOrders = async (_request: Request, response: Response) => {
  const allOrders = await OrderModel.find({})
    .populate({
      path: "orderItems",
      populate: {
        path: "food",
        model: "Foods",
      },
    })
    .populate("user");

  response.status(200).send({ orders: allOrders });
};
