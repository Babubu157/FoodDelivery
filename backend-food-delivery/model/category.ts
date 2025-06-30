import { model, Schema } from "mongoose";

export type CategoryType = {
  categoryName: String;
  createdAt: Date;
  updatedAt: Date;
};

const FoodCategory = new Schema<CategoryType>({
  categoryName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, immutable: true },
  updatedAt: { type: Date, default: Date.now },
});

FoodCategory.index({ categoryName: 1 }, { unique: true });

export const CategoryModel = model<CategoryType>(
  "FoodCategories",
  FoodCategory
);
