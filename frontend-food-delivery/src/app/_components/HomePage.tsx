"use client";
import { Card } from "./Card";

type FoodProps = {
  foodName: string;
  image: string;
  ingredients: string;
  price: number;
  _id: string;
};

type PropsType = {
  foods: Record<string, FoodProps[]>;
};

export const HomePage = ({ foods }: PropsType) => {
  const keys = Object.keys(foods);

  return (
    <div className="flex flex-col gap-20">
      {keys.map((el) => {
        return (
          <div key={el} className="flex flex-col gap-14">
            <p className="text-4xl text-white ">
              <b>{el}</b>
            </p>
            <div className="grid grid-cols-3 gap-9">
              {foods[el].slice(0, 6).map((food, index) => {
                return (
                  <div key={index}>
                    <Card food={food} />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
