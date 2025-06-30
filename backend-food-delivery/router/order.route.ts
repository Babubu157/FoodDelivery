import { Router } from "express";
import { tokenChecker } from "../middleware/token-checker";
import { addCategory } from "../controller/category/add-category";
import { getCategories } from "../controller/category/get-categories";
import { addFood } from "../controller/food/add-food";
import { getFoodsByCategory } from "../controller/food/get-foods-by-category";
import { createOrder } from "../controller/order/createOrder";
import { getOrdersByUserId } from "../controller/order/getOrders";

export const OrderRouter = Router();

OrderRouter.post("/createOrder", tokenChecker, createOrder);
OrderRouter.get("/orders", tokenChecker, getOrdersByUserId);
