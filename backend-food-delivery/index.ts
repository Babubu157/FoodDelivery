import express, { request, Request, Response } from "express";
import mongoose, { Model, Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import cors from "cors";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { UserRouter } from "./router/user.route";
import { CategoryRouter } from "./router/category.route";
import { CategoryModel } from "./model/category";
import { FoodRouter } from "./router/food.route";
import { OrderRouter } from "./router/order.route";
import { AdminRouter } from "./router/admin.route";

const databaseConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://gboloro:dddIwK664DhmXshW@fooddelivery.ptauaku.mongodb.net/FoodDelivery"
    );
    console.log("Successfully connected");
  } catch (err) {
    console.log(err);
  }
};

type FoodOrderItem = {
  food: Schema.Types.ObjectId;
  quantity: Number;
};

const FoodOrderItemSchema = new Schema({
  food: { type: Schema.Types.ObjectId, require: true, ref: "Foods" },
  quantity: { type: Number, require: true },
});

enum FoodOrderStatusEnum {
  PENDING = "PENDING",
  CANCELLED = "CANCELLED",
  DELIVERED = "DELIVERED",
}

const FoodOrderStatus = new Schema({
  status: {
    type: String,
    enum: ["PENDING", "CANCELLED", "DELIVERED"],
  },
});

type FoodOrder = {
  user: Schema.Types.ObjectId;
  totalPrice: Number;
  foodOrderItems: FoodOrderItem[];
  status: FoodOrderStatusEnum;
  createdAt: Date;
  updatedAt: Date;
};

const FoodOrder = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "Users" },
  totalPrice: { type: Number },
  foodOrderItems: { type: [FoodOrderItemSchema], required: true },
  status: { type: FoodOrderStatus, required: true },
  createdAt: { type: Date, required: true, immutable: true },
  updatedAt: { type: Date, required: true },
});

// export type MenuSection = {
//   categoryId: string;
//   categoryName: string;
//   foods: FoodType[];
// };

const app = express(); // app gedeg ni serveree helj baigaa
app.use(express.json());
app.use(cors());

databaseConnect();

app.use(UserRouter);
app.use(CategoryRouter);
app.use(FoodRouter);
app.use(OrderRouter);

app.use(AdminRouter);

// app.get("/", async (_request: Request, response: Response) => {
//   response.send({ message: "Hello world" });
// });

// app.get("/", async (req: Request, res: Response) => {
//   try {
//     const categories = await CategoryModel.find();
//     const menuByCategory = await Promise.all(
//       categories.map(async (cat) => {
//         const allFoods = await FoodModel.find({ category: cat._id }).lean();
//         return {
//           categoryId: cat._id,
//           categoryName: cat.categoryName,
//           foods: allFoods,
//         };
//       })
//     );
//     res.status(200).json(menuByCategory);
//   } catch (error) {
//     console.error("Menu fetch error:", error);
//     res.status(500).json({ error: "Internet server error" });
//   }
// });

// app.put('/updatePass', async(request: Request, response: Response) => {

// })

// app.post("/adduser", async (request: Request, response: Response) => {
//   const { email, password } = request.body;
//   const result = await UserModel.create({ email, password });
//   response.send(result);
// });

// app.get("/users", async (_request: Request, response: Response) => {
//   const users = await UserModel.find();
//   response.send(users);
// });

// app.get("/user", async (_request: Request, response: Response) => {
//   const users = await UserModel.findOne();
//   response.send(users);
// });

// app.delete("/delete", async (_request: Request, response: Response) => {
//   const result = await UserModel.deleteOne({ _id: "683fc304edb6c744e5972243" });
//   response.send(result);
// });

// app.put("/updatePass", async (request: Request, response: Response) => {
//   const { email, password } = request.body;
//   const result = await UserModel.findOneAndUpdate(
//     { email },
//     { password, updatedAt: new Date() },
//     { new: true }
//   );

//   response.send(result);
// });

app.listen(8000),
  () => {
    console.log("running on http://localhost:8000");
  };

///// email ilgeedeg function
// app.get("/test", async (request: Request, response: Response) => {
//   const transport = nodemailer.createTransport({
//     service: "gmail",
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: "gboloro@gmail.com",
//       pass: "vfdqmogeujjvpzcv",
//     },
//   });

//   const options = {
//     from: "gboloro@gmail.com",
//     to: "25LP0000@nest.edu.mn",
//     subject: "hello",
//     text: "test email",
//     // html: `<div style="color: red">Hello html test</div>`,
//   };

//   await transport.sendMail(options);
//   response.status(200).send("Success");
// });
