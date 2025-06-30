import { Model, model, models, ObjectId, Schema } from "mongoose";

enum FoodOrderStatusEnum {
  PENDING = "PENDING",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
}

type OrderItemsType = {
  quantity: number;
  food: Schema.Types.ObjectId;
  _id: boolean;
};

type OrderModelType = {
  _id: ObjectId;
  user: Schema.Types.ObjectId;
  totalPrice: number;
  orderItems: OrderItemsType[];
  address: string;
  status: FoodOrderStatusEnum;
  createdAt: Date;
  updatedAt: Date;
};

const OrderItems = new Schema<OrderItemsType>(
  {
    quantity: { type: Number, required: true },
    food: { type: Schema.Types.ObjectId, ref: "Foods", required: true },
  },
  { _id: false }
);

const Order = new Schema<OrderModelType>({
  user: { type: Schema.Types.ObjectId, ref: "Users", required: true },
  totalPrice: { type: Number, required: true },
  orderItems: { type: [OrderItems], required: true },
  address: { type: String, required: true },
  status: {
    type: String,
    enum: Object.values(FoodOrderStatusEnum),
    default: FoodOrderStatusEnum.PENDING,
    required: true,
  },
  createdAt: {
    type: Date,
    require: true,
    immutable: true,
    default: new Date(),
  },
  updatedAt: { type: Date, require: true, default: new Date() },

  // {timestamps: true}
});

export const OrderModel: Model<OrderModelType> =
  models["Orders"] || model<OrderModelType>("Orders", Order);

// export const OrderModel = model<OrderModelType>("Orders", Order);
