import { Request, Response } from "express";
import { OrderModel } from "../../model/order.model";

export const updateOrderState = async (
  request: Request,
  response: Response
) => {
  const { orders } = request.body;

  await Promise.all(
    orders.map(async (order: Record<string, string>) => {
      await OrderModel.findByIdAndUpdate(
        { _id: order.orderId },
        { status: order.status }
      );
    })
  );

  response.status(200).send({ message: "Successfully updated!" });
};
