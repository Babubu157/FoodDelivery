import { Button } from "@/components/ui/button";
import { useAuth } from "./UserProvider";
import { useRouter } from "next/navigation";
import { Props } from "./UserLoginCheck";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { Toaster } from "sonner";
import Image from "next/image";
import axios from "axios";
import { useCart } from "./CartContext";

type PropsType = { grandTotal: Number };

export const LoggedUserCheckOut = ({ grandTotal }: PropsType) => {
  const router = useRouter();
  const token = localStorage.getItem("token");
  const { deliveryAddress, setDeliveryAddress } = useAuth();
  const { cartItems, cartTotal, clearCart } = useCart();

  //   const homeHandler = () => {
  //     ;
  //   };

  console.log("cart items", cartItems);

  const orderHandler = async () => {
    const orderItems = cartItems.map((item) => ({
      food: item.id,
      quantity: item.qty,
    }));

    await axios.post(
      "https://fooddeliverybe.onrender.com/createOrder",
      {
        totalPrice: grandTotal,
        address: deliveryAddress,
        orderItems: orderItems,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    clearCart();
    setDeliveryAddress("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#EF4444] rounded-full" onClick={orderHandler}>
          Checkout
        </Button>
      </DialogTrigger>
      <DialogContent className="!w-[560px] !max-w-[560px] fixed top-[100px] left-[300px] h-[430px] pt-[30px] rounded-lg bg-white shadow-xl">
        <DialogTitle></DialogTitle>
        <DialogClose asChild>
          <Button variant="ghost" className="absolute top-2 right-2">
            X
          </Button>
        </DialogClose>
        <div className="w-[560px] h-[380px] flex flex-col items-center justify-between">
          <p>Your order has been successfully placed !</p>
          <div className="w-[156px] h-[260px] relative">
            <Image
              src="/orderPlaced.png"
              alt="order"
              fill
              className="object-cover"
            />
          </div>
          <Button
            className="bg-white w-[120px] "
            variant={"outline"}
            onClick={() => router.push("/")}
          >
            Back to Home
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
