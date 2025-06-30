import { Router } from "express";
import { tokenChecker } from "../middleware/token-checker";
import { addCategory } from "../controller/category/add-category";
import { getCategories } from "../controller/category/get-categories";

export const CategoryRouter = Router();

CategoryRouter.post("/addCategory", tokenChecker, addCategory);
CategoryRouter.get("/categories", getCategories);
