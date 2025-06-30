import { Router } from "express";
import { tokenChecker } from "../middleware/token-checker";
import { getFoodsByCategory } from "../controller/food/get-foods-by-category";
import { isAdmin } from "../middleware/authorization";
import { getAllOrders } from "../controller/admin/get-all-orders";
import { updateOrderState } from "../controller/admin/update-order-status";

export const AdminRouter = Router();

AdminRouter.get("/admin/getAllOrders", [tokenChecker, isAdmin], getAllOrders);
AdminRouter.put("/admin/update", [tokenChecker, isAdmin], updateOrderState);
