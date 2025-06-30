import { Request, Response } from "express";
import { CategoryModel } from "../../model/category";

export const addCategory = async (request: Request, response: Response) => {
  try {
    const { categoryName } = request.body;
    const category = await CategoryModel.create({ categoryName });

    response.status(201).send({ message: "Category added" });
  } catch (error) {
    response
      .status(400)
      .send({ message: "Category name cannot be duplicated" });
  }
};
