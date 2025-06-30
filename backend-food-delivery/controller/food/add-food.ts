import { FoodModel } from "../../model/food.model";
import { Request, Response } from "express";

export const addFood = async (request: Request, response: Response) => {
  try {
    const { foodName, price, image, ingredients, category } = request.body;

    await FoodModel.create({
      foodName,
      price,
      image,
      ingredients,
      category,
    });

    response.status(201).send({ message: "Successfully added" });
  } catch (error) {
    response.status(400).send({ message: "Food name cannot be duplicated" });
  }
};
