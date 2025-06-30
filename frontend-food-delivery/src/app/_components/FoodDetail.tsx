"use client";
import {
  DialogClose,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import { Dialog, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import Image from "next/image";
import { Card } from "./Card";
import { Button } from "@/components/ui/button";
import { CircleMinus, CirclePlus, CircleX, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import { useCart } from "./CartContext";

type FoodDetailProps = {
  foodName: string;
  id: string;
  price: number;
  image: string;
  ingredients: string;
  open: boolean;
  setOpen: (val: boolean) => void;
};

export const FoodDetail = ({
  id,
  foodName,
  image,
  price,
  ingredients,
  open,
  setOpen,
}: FoodDetailProps) => {
  const [qty, setQty] = useState(1);
  // const [open, setOpen] = useState(false);

  // const subQty = () => {
  //   setQty((prev) => (prev > 1 ? prev - 1 : 1));
  // };

  // const storageKey = "OrderItemDetail";

  // const addCart = () => {
  //   const order = localStorage.getItem(storageKey);
  //   const orderItems: FoodDetailProps[] = order ? JSON.parse(order) : [];
  //   // console.log(orderItems);

  //   const isFoodExisting = orderItems.find((food) => food.id === id);

  //   if (isFoodExisting) {
  //     const newFoods = orderItems.map((food) => {
  //       if (food.id === id) {
  //         return { ...food, qty };
  //       } else {
  //         return food;
  //       }
  //     });
  //     localStorage.setItem(storageKey, JSON.stringify(newFoods));
  //   } else {
  //     const addNewItem = [
  //       ...orderItems,
  //       { foodName, price, image, id, ingredients, qty },
  //     ];
  //     localStorage.setItem(storageKey, JSON.stringify(addNewItem));
  //     toast.success("Сагсанд амжилттай нэмэгдлээ");
  //   }
  // };

  const { addToCart, decreaseQty, increaseQty } = useCart();

  const handleAdd = () => {
    addToCart({ id, foodName, price, image, ingredients, qty: 0 }, qty);
    toast.success("Сагсанд нэмэгдлээ");
    setQty(qty);
    setOpen(false);
  };

  const subQty = () => {
    setQty((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <>
      <Toaster richColors position="top-center" />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="absolute bottom-4 right-12 w-[50px] h-[50px] rounded-full">
            <Plus />
          </Button>
        </DialogTrigger>
        <DialogContent className="!w-fit !max-w-fit items-center">
          <div className="flex gap-6">
            <div className="w-[377px] h-[364px] relative">
              <Image
                src={image}
                alt="food"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="w-[377px] h-[364px]">
              <div className="flex justify-end">
                <DialogClose asChild>
                  <Button className="bg-white size-9" onClick={() => setQty(1)}>
                    <CircleX
                      color="#000000"
                      className="size-9"
                      strokeWidth={1}
                    />
                  </Button>
                </DialogClose>
              </div>
              <div className="w-full flex flex-col gap-27">
                <div className="w-full flex flex-col gap-3">
                  <DialogTitle className="text-3xl font-semibold text-[#EF4444]">
                    {foodName}
                  </DialogTitle>
                  <p>{ingredients}</p>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col justify-center">
                      <p>Total price</p>
                      <p className="text-2xl font-semibold">$ {qty * price}</p>
                    </div>
                    <div className="flex items-center">
                      <Button className="bg-white size-11" onClick={subQty}>
                        <CircleMinus
                          color="#000000"
                          className="size-11"
                          strokeWidth={1}
                        />
                      </Button>
                      <p className="mx-3 text-lg font-semibold"> {qty} </p>
                      <Button
                        className=" bg-white size-11"
                        onClick={() => setQty(qty + 1)}
                      >
                        <CirclePlus
                          color="#000000"
                          className="size-11"
                          strokeWidth={1}
                        />
                      </Button>
                    </div>
                  </div>
                  <Button
                    className="w-full h-11"
                    onClick={() => {
                      handleAdd();
                      setQty(1);
                    }}
                  >
                    Add to cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
