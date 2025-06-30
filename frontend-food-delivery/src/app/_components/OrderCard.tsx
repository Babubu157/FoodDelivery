"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { CircleX, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PropsType } from "./ShoppingCart";

export const OrderCard = ({

  id,
  foodName,
  price,
  ingredients,
  qty,
  image,
  decreaseQty,
  increaseQty,
  removeItem,
  index
}: PropsType) => {
  console.log(id);

  return (
    <div className="flex flex-col gap-3 rounded-xl">
      <div className="bg-white rounded-xl">
        <div>
          <div className="w-full flex flex-col">
            <div className="w-full flex justify-center gap-[10px] ">
              <div className="w-[90px] h-[90px] relative">
                <Image
                  src={image}
                  alt="food"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-[205px] flex justify-between">
                  <div className="w-[160px]">
                    <p className="text-[#EF4444] text-md font-bold">
                      {foodName}
                    </p>
                    <p className="text-[#09090B] text-xs font-400">
                      {ingredients}
                    </p>
                  </div>
                  <Button
                    className="bg-white size-9"
                    onClick={() => removeItem(id)}
                  >
                    <CircleX
                      color="#EF4444"
                      className="size-9"
                      strokeWidth={1}
                    />
                  </Button>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Button
                      className="bg-white size-9"
                      onClick={() => decreaseQty(id)}
                    >
                      <Minus
                        color="#000000"
                        className="size-4"
                        strokeWidth={1}
                      />
                    </Button>
                    <p className="mx-3 text-lg font-semibold">{qty}</p>
                    <Button
                      className=" bg-white size-9"
                      onClick={() => increaseQty(id)}
                    >
                      <Plus
                        color="#000000"
                        className="size-4"
                        strokeWidth={1}
                      />
                    </Button>
                  </div>

                  <p className="text-xl font-semibold">${qty * price}</p>
                </div>
              </div>
            </div>
            <div className="w-full border border-dashed border-b-[#09090B] my-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
