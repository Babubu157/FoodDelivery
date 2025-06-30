"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import { OrderCard } from "./OrderCard";
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";
import { useEffect, useState } from "react";
import { OrderHistory } from "./OrderHistory";
import { Label } from "@radix-ui/react-label";
// import { CheckOut } from "./CheckOut";
import { useAuth } from "./UserProvider";
import { LoggedUserCheckOut } from "./LoggedUserCheckOut";
import { GuestUserCheckOut } from "./GuestUserCheckOut";
import { useCart } from "./CartContext";
import Image from "next/image";

type CartItem = {
  foodName: string;
  price: number;
  qty: number;
  image: string;
  ingredients: string;
  id: string;
};

export type PropsType = {
  foodName: string;
  price: number;
  qty: number;
  image: string;
  ingredients: string;
  id: string;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
  //   updateCart: (newCart: CartItem[]) => void;
  removeItem: (id: string) => void;
  index: number;
};

// export const ShoppingCartDetail = () => {
//   const [selectedTab, setSelectedTab] = useState<"current" | "history">(
//     "current"
//   );

//   //   const [itemsTotal, setItemsTotal] = useState(0);

//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   const storageKey = "OrderItemDetail";

//   useEffect(() => {
//     const readCart = localStorage.getItem(storageKey);
//     if (readCart) {
//       setCartItems(JSON.parse(readCart));
//     }
//   }, []);

//   //   console.log(cartItems);

//   //   const [qty, setQty] = useState(0);

//   //   const subQty = () => {
//   //     setQty((prev) => (prev > 1 ? prev - 1 : 1));
//   //   };

//   const updateCart = (newCart: CartItem[]) => {
//     setCartItems(newCart);
//     localStorage.setItem(storageKey, JSON.stringify(newCart));
//   };

//   const increaseQty = (index: number) => {
//     const newCart = [...cartItems];
//     newCart[index].qty += 1;
//     updateCart(newCart);
//   };

//   const decreaseQty = (index: number) => {
//     const newCart = [...cartItems];
//     if (newCart[index].qty > 1) {
//       newCart[index].qty -= 1;
//       updateCart(newCart);
//     }
//   };

//   const deliveryFee = 1;

//   const removeItem = (id: string) => {
//     const updated = cartItems.filter((item) => item.id !== id);
//     console.log(id);

//     updateCart(updated);
//   };

//   const foodTotal = cartItems.reduce(
//     (sum, item) => sum + item.price * item.qty,
//     0
//   );
//   const grandTotal = foodTotal + deliveryFee;

//   const { user } = useAuth();
//   console.log(cartItems);

export const ShoppingCartDetail = () => {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    cartTotal,
    cartItemsTotal,
  } = useCart();

  const { user, deliveryAddress, setDeliveryAddress } = useAuth();

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryAddress(event.target.value);
  };

  const [selectedTab, setSelectedTab] = useState<"current" | "history">(
    "current"
  );

  const deliveryFee = 1;
  const grandTotal = cartTotal + deliveryFee;
  console.log(deliveryAddress);

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="bg-[#F4F4F5] relative w-[36px] h-[36px] flex justify-center items-center rounded-full hover:bg-primary-none">
            <ShoppingCart color="#18181B" />
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-400 flex items-center justify-center text-white rounded-full">
              {cartItemsTotal}
            </div>
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-[#404040] !w-[405px] !max-w-[405px] overflow-y-auto p-8 rounded-xl">
          <SheetHeader>
            <SheetTitle className="text-white text-xl font-semibold ">
              <div className="flex gap-2">
                <ShoppingCart /> Order detail
              </div>
            </SheetTitle>
          </SheetHeader>

          <ToggleGroup
            type="single"
            value={selectedTab}
            onValueChange={(val) => {
              if (val) setSelectedTab(val as "current" | "history");
            }}
            className="flex gap-2 bg-white w-full rounded-full p-1"
          >
            <ToggleGroupItem
              value="current"
              className="flex-1/2 px-4 py-2 text-sm data-[state=on]:bg-[#EF4444] data-[state=on]:text-white rounded-full"
            >
              Cart
            </ToggleGroupItem>

            <ToggleGroupItem
              value="history"
              className="flex-1/2 px-4 py-2 text-sm data-[state=on]:bg-[#EF4444] data-[state=on]:text-white rounded-full"
            >
              Order
            </ToggleGroupItem>
          </ToggleGroup>
          {selectedTab === "current" && (
            <div className="flex flex-col">
              <div className="flex flex-col gap-4">
                <div className="bg-white flex flex-col w-full rounded-3xl p-4">
                  {/* {cartItems.length === 0 ? (
                    <div></div>
                  ) : (
                    cartItems.map((item, index) => (
                      <div key={index}>
                        <OrderCard
                          id={item.id}
                          foodName={item.foodName}
                          price={item.price}
                          ingredients={item.ingredients}
                          qty={item.qty}
                          image={item.image}
                          updateCart={updateCart}
                          decreaseQty={decreaseQty}
                          increaseQty={increaseQty}
                          removeItem={removeItem}
                          index={index}
                        />
                      </div>
                    ))
                  )} */}
                  {cartItems.length === 0 ? (
                    <div className="w-full h-[180px] bg-[#F4F4F5] rounded-xl flex flex-col justify-center items-center p-8 gap-1 mb-[250px]">
                      <Image
                        src={"/plate.png"}
                        alt="logo"
                        width={40}
                        height={30}
                      />
                      <p className="text-md font-bold">Your cart is empty</p>
                      <p className="text-[#71717A] text-xs text/text-muted-foreground text-center">
                        Hungry? 🍔 Add some delicious dishes to your cart and
                        satisfy your cravings!
                      </p>
                    </div>
                  ) : (
                    <>
                      <Label className="text-[#71717A] text-xl font-semibold mb-4">
                        My Cart
                      </Label>

                      {cartItems.map((item, index) => (
                        <OrderCard
                          index={index}
                          key={item.id}
                          id={item.id}
                          foodName={item.foodName}
                          price={item.price}
                          ingredients={item.ingredients}
                          qty={item.qty}
                          image={item.image}
                          increaseQty={() => increaseQty(item.id)}
                          decreaseQty={() => decreaseQty(item.id)}
                          removeItem={() => removeFromCart(item.id)}
                        />
                      ))}

                      <div className="flex flex-col bg-white gap-2 px-3 mt-14">
                        <Label className="text-[#71717A] text-xl font-semibold">
                          Delivery location
                        </Label>
                        <div className="w-full h-[60px] border border-[#E11D48] rounded-lg">
                          <input
                            placeholder="Please complete your address"
                            className="w-full outline-none px-2"
                            defaultValue={deliveryAddress}
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
                {/* {cartItems.length > 0  ( */}
                <div className="bg-white p-4 space-y-2 text-sm text-gray-700 px-3 rounded-xl flex flex-col gap-5">
                  <Label className="text-[#71717A] text-xl font-semibold">
                    Payment info
                  </Label>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                      <span>Total:</span>
                      <span>${cartTotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery:</span>
                      <span>${deliveryFee}</span>
                    </div>
                  </div>
                  <div className="w-full border border-dashed border-b-[#09090B]"></div>
                  <div className="flex justify-between font-bold text-base text-black  pt-2">
                    <span>Total:</span>
                    <span>${grandTotal}</span>
                  </div>

                  {user?.userId ? (
                    <LoggedUserCheckOut grandTotal={grandTotal} />
                  ) : (
                    <GuestUserCheckOut />
                  )}
                </div>
                {/* )} */}
              </div>
              {/* <div className="bg-white flex flex-col gap-14 p-4 w-full rounded-3xl">
                <div>
                  <Label className="text-[#71717A] text-xl font-semibold">
                    Payment info
                  </Label>
                  <div className="flex flex-col ">
                    <div className="flex justify-between">
                      <p className="text-[#71717A]">Items:</p>
                      <p> items cost</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Delivery:</p> <p>{delivery}</p>
                    </div>
                  </div>
                  <div className="w-full border border-dashed border-b-[#09090B] my-5"></div>
                  <div className="flex justify-between">
                    <p>Total</p>
                    <p>total cost</p>
                  </div>
                </div>
                <Button type="submit" className="bg-[#EF4444] rounded-full">
                  Checkout
                </Button>
              </div> */}
            </div>
          )}
          {selectedTab === "history" && <OrderHistory key="history" />}
        </SheetContent>
      </Sheet>
    </div>
  );
};
