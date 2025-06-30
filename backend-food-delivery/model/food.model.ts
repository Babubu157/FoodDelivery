import { model, Schema } from "mongoose";

export type FoodType = {
  _id: Schema.Types.ObjectId;
  foodName: String;
  price: Number;
  image: String;
  ingredients: String;
  category: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
};
const Food = new Schema<FoodType>({
  foodName: { type: String, require: true },
  price: { type: Number, require: true },
  image: { type: String, require: true },
  ingredients: { type: String, require: true },
  category: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "FoodCategories",
  },
  createdAt: { type: Date, require: true, immutable: true },
  updatedAt: { type: Date, require: true },
});
Food.index({ foodName: 1 }, { unique: true });

export const FoodModel = model<FoodType>("Foods", Food);
