import { Request, Response } from "express";
import { CategoryModel } from "../../model/category";

export const getCategories = async (_request: Request, response: Response) => {
  try {
    const allCategories = await CategoryModel.find();
    response.send({ categories: allCategories });
  } catch (error) {
    response.status(400).send({ message: "Database connection error" });
  }
};
